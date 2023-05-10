import db, { Transaction } from 'framework/db';

export const RoleTable = 'Role';

export interface Role {
  roleId: string,
}

export default (
  t?: Transaction,
) => (t || db)<Role>(RoleTable);
