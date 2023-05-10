import db, { Transaction } from 'framework/db';

export const Account_RoleTable = 'Account_Role';

export interface Account_Role {
  accountId: string,
  roleId: string,
}

export default (
  t?: Transaction,
) => (t || db)<Account_Role>(Account_RoleTable);
