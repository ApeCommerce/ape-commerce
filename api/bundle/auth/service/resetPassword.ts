import { ResetPasswordReply, ResetPasswordRequest } from 'common/bundle/auth/endpoint/resetPassword';
import { timestamp } from '@apecommerce/ape-framework/utils';
import { tokenExpiration, TokenType } from 'bundle/auth/lib';
import Account_RoleQuery from 'bundle/core/table/Account_Role';
import AccountQuery from 'bundle/core/table/Account';
import jwt from '@apecommerce/ape-framework/jwt';
import pwd from '@apecommerce/ape-framework/pwd';

export default async (
  request: ResetPasswordRequest,
): Promise<ResetPasswordReply | false> => {
  const ts = timestamp();

  const tokenAuth = jwt.verifyToken(request.token, TokenType.passwordReset, ts);
  if (!tokenAuth) return false;

  const account = await AccountQuery().where({ accountId: tokenAuth.id }).first();
  if (!account || !account.isValidated || !account.isEnabled) return false;

  await AccountQuery().where({ accountId: account.accountId }).update({
    passwordHash: await pwd.hashPassword(request.password),
    authenticationTs: ts,
  });

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
