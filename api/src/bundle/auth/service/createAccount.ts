import { CreateAccountRequest } from 'common/bundle/auth/endpoint/createAccount';
import { formatEmail, rateLimit, tokenExpiration, RateLimiting, TokenType } from 'bundle/auth/lib';
import { RoleId } from 'common/bundle/core/role';
import { timestamp, uuid } from 'framework/utils';
import Account_RoleQuery from 'bundle/core/table/Account_Role';
import AccountQuery from 'bundle/core/table/Account';
import AccountSettingQuery from 'bundle/core/table/AccountSetting';
import accountValidationEmail from 'bundle/auth/email/store/accountValidation';
import CountryQuery from 'bundle/core/table/Country';
import db from 'framework/db';
import jwt from 'framework/jwt';
import LanguageQuery from 'bundle/core/table/Language';
import mail from 'framework/mail';
import pwd from 'framework/pwd';

export default async (
  request: CreateAccountRequest,
): Promise<boolean> => {
  const ts = timestamp();
  const email = formatEmail(request.email);
  const passwordHash = await pwd.hashPassword(request.password);

  const language = await LanguageQuery().where({ languageId: request.languageId }).first();
  if (!language || !language.isEnabled) { return false; }

  const country = await CountryQuery().where({ countryId: request.countryId }).first();
  if (!country || !country.isEnabled) { return false; }

  let account = await AccountQuery().where({ email }).first();
  if (!account) {
    const newAccount = {
      accountId: uuid(),
      email,
      passwordHash,
      isValidated: false,
      isEnabled: true,
      creationTs: ts,
      authenticationTs: null,
      validationWindow: 0,
      validationCount: 0,
      passwordAttemptWindow: 0,
      passwordAttemptCount: 0,
      passwordResetWindow: 0,
      passwordResetCount: 0,
      passwordlessAuthWindow: 0,
      passwordlessAuthCount: 0,
    };
    await db.transaction(async (transaction) => {
      await AccountQuery(transaction).insert(newAccount);

      await AccountSettingQuery(transaction).insert({
        accountId: newAccount.accountId,
        languageId: language.languageId,
        countryId: country.countryId,
      });

      await Account_RoleQuery(transaction).insert({
        accountId: newAccount.accountId,
        roleId: RoleId.user,
      });
    });
    account = newAccount;
  }
  if (account.isValidated || !account.isEnabled) { return false; }

  const limit = rateLimit(
    account.validationWindow,
    account.validationCount,
    RateLimiting.accountValidation,
    ts,
  );
  if (limit.isExceeded) { return false; }

  await AccountQuery().where({ accountId: account.accountId }).update({
    passwordHash,
    creationTs: ts,
    validationWindow: limit.newWindow,
    validationCount: limit.newCount,
  });

  await AccountSettingQuery().where({ accountId: account.accountId }).update({
    languageId: language.languageId,
    countryId: country.countryId,
  });

  const token = jwt.createToken(
    { id: account.accountId, roles: [] },
    TokenType.accountValidation,
    tokenExpiration.accountValidation,
    ts,
  );

  await mail.send([email], await accountValidationEmail(language.languageId, country.countryId, token));

  return true;
};
