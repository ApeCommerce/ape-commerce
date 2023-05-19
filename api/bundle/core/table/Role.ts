import { Transaction } from '@apecommerce/ape-framework/db/transaction';
import db from '@apecommerce/ape-framework/db';

export const RoleTable = 'Role';

export interface Role {
  roleId: string,
}

export default (
  t?: Transaction,
) => (t || db)<Role>(RoleTable);
