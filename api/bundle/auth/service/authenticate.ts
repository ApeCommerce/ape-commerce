import { AuthenticateReply, AuthenticateRequest } from 'common/bundle/auth/endpoint/authenticate';
import { formatEmail, rateLimit, RateLimiting, tokenExpiration, TokenType } from 'bundle/auth/lib';
import { timestamp } from '@apecommerce/ape-framework/utils';
import Account_RoleQuery from 'bundle/core/table/Account_Role';
import AccountQuery from 'bundle/core/table/Account';
import jwt from '@apecommerce/ape-framework/jwt';
import pwd from '@apecommerce/ape-framework/pwd';

export default async (
  request: AuthenticateRequest,
): Promise<AuthenticateReply | false> => {
  const ts = timestamp();

  const account = await AccountQuery().where({ email: formatEmail(request.email) }).first();
  if (!account || !account.passwordHash || !account.isValidated || !account.isEnabled) return false;

  const limit = rateLimit(
    account.passwordAttemptWindow,
    account.passwordAttemptCount,
    RateLimiting.passwordAttempt,
    ts,
  );
  if (limit.isExceeded) return false;

  if (!await pwd.verifyPassword(request.password, account.passwordHash)) {
    await AccountQuery().where({ accountId: account.accountId }).update({
      passwordAttemptWindow: limit.newWindow,
      passwordAttemptCount: limit.newCount,
    });
    return false;
  }

  await AccountQuery().where({ accountId: account.accountId }).update({ authenticationTs: ts });

  const roles = await Account_RoleQuery().where({ accountId: account.accountId });

  return {
    token: jwt.createToken(
      { id: account.accountId, roles: roles.map((role) => role.roleId) },
      TokenType.authorization,
      tokenExpiration.authorization,
      ts,
    ),
  };
};
