import { AppId } from 'common/bundle/core/app';
import { formatEmail, rateLimit, tokenExpiration, RateLimiting, TokenType } from 'bundle/auth/lib';
import { RequestPasswordResetRequest } from 'common/bundle/auth/endpoint/requestPasswordReset';
import { RoleId } from 'common/bundle/core/role';
import { timestamp } from 'framework/utils';
import Account_RoleQuery from 'bundle/core/table/Account_Role';
import AccountQuery from 'bundle/core/table/Account';
import AccountSettingQuery from 'bundle/core/table/AccountSetting';
import adminPasswordResetEmail from 'bundle/auth/email/admin/passwordReset';
import jwt from 'framework/jwt';
import mail from 'framework/mail';
import storePasswordResetEmail from 'bundle/auth/email/store/passwordReset';

export default async (
  request: RequestPasswordResetRequest,
): Promise<boolean> => {
  const ts = timestamp();
  const email = formatEmail(request.email);

  const account = await AccountQuery().where({ email }).first();
  if (!account || !account.isValidated || !account.isEnabled) { return false; }

  const roles = await Account_RoleQuery().where({ accountId: account.accountId });

  const appId = Object.values(AppId).find((id) => id === request.appId);
  if (!appId || (appId === AppId.admin && !roles.find((role) => role.roleId === RoleId.admin))) { return false; }

  const limit = rateLimit(
    account.passwordResetWindow,
    account.passwordResetCount,
    RateLimiting.passwordReset,
    ts,
  );
  if (limit.isExceeded) { return false; }

  await AccountQuery().where({ accountId: account.accountId }).update({
    passwordResetWindow: limit.newWindow,
    passwordResetCount: limit.newCount,
  });

  const accountSetting = await AccountSettingQuery().where({ accountId: account.accountId }).first();
  if (!accountSetting) { return false; }

  const token = jwt.createToken(
    { id: account.accountId, roles: [] },
    TokenType.passwordReset,
    tokenExpiration.passwordReset,
    ts,
  );

  await mail.send(
    [email],
    appId === AppId.admin
      ? await adminPasswordResetEmail(accountSetting.languageId, token)
      : await storePasswordResetEmail(accountSetting.languageId, accountSetting.countryId, token),
  );

  return true;
};
