import { AppId } from 'common/bundle/core/app';
import { formatEmail, rateLimit, tokenExpiration, RateLimiting, TokenType } from 'bundle/auth/lib';
import { RequestPasswordlessAuthRequest } from 'common/bundle/auth/endpoint/requestPasswordlessAuth';
import { RoleId } from 'common/bundle/core/role';
import { timestamp } from 'framework/utils';
import Account_RoleQuery from 'bundle/core/table/Account_Role';
import AccountQuery from 'bundle/core/table/Account';
import AccountSettingQuery from 'bundle/core/table/AccountSetting';
import adminPasswordlessAuthEmail from 'bundle/auth/email/admin/passwordlessAuth';
import jwt from 'framework/jwt';
import mail from 'framework/mail';
import storePasswordlessAuthEmail from 'bundle/auth/email/store/passwordlessAuth';

export default async (
  request: RequestPasswordlessAuthRequest,
): Promise<boolean> => {
  const ts = timestamp();
  const email = formatEmail(request.email);

  const account = await AccountQuery().where({ email }).first();
  if (!account || !account.isValidated || !account.isEnabled) { return false; }

  const roles = await Account_RoleQuery().where({ accountId: account.accountId });

  const appId = Object.values(AppId).find((id) => id === request.appId);
  if (!appId || (appId === AppId.admin && !roles.find((role) => role.roleId === RoleId.admin))) { return false; }

  const limit = rateLimit(
    account.passwordlessAuthWindow,
    account.passwordlessAuthCount,
    RateLimiting.passwordlessAuth,
    ts,
  );
  if (limit.isExceeded) { return false; }

  await AccountQuery().where({ accountId: account.accountId }).update({
    passwordlessAuthWindow: limit.newWindow,
    passwordlessAuthCount: limit.newCount,
  });

  const accountSetting = await AccountSettingQuery().where({ accountId: account.accountId }).first();
  if (!accountSetting) { return false; }

  const token = jwt.createToken(
    { id: account.accountId, roles: [] },
    TokenType.passwordlessAuth,
    tokenExpiration.passwordlessAuth,
    ts,
  );

  await mail.send(
    [email],
    appId === AppId.admin
      ? await adminPasswordlessAuthEmail(accountSetting.languageId, token)
      : await storePasswordlessAuthEmail(accountSetting.languageId, accountSetting.countryId, token),
  );

  return true;
};
