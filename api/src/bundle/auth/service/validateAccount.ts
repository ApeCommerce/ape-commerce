import { timestamp } from 'framework/utils';
import { tokenExpiration, TokenType } from 'bundle/auth/lib';
import { ValidateAccountReply, ValidateAccountRequest } from 'common/bundle/auth/endpoint/validateAccount';
import Account_RoleQuery from 'bundle/core/table/Account_Role';
import AccountQuery from 'bundle/core/table/Account';
import jwt from 'framework/jwt';

export default async (
  request: ValidateAccountRequest,
): Promise<ValidateAccountReply | false> => {
  const ts = timestamp();

  const tokenAuth = jwt.verifyToken(request.token, TokenType.accountValidation, ts);
  if (!tokenAuth) { return false; }

  const account = await AccountQuery().where({ accountId: tokenAuth.id }).first();
  if (!account || !account.isEnabled) { return false; }

  await AccountQuery().where({ accountId: account.accountId }).update({
    isValidated: true,
    authenticationTs: ts,
  });

  const roles = await Account_RoleQuery().where({ accountId: account.accountId });

  return {
    token: jwt.createToken(
      { id: account.accountId, roles: roles.map((role) => role.roleId) },
      TokenType.authorization,
      ts,
      tokenExpiration.authorization,
    ),
  };
};
