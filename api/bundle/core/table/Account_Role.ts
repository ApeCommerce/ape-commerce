import db from '@apecommerce/ape-framework/db';
import { Transaction } from '@apecommerce/ape-framework/db/transaction';

export const Account_RoleTable = 'Account_Role';

export interface Account_Role {
  accountId: string,
  roleId: string,
}

export default (
  t?: Transaction,
) => (t || db)<Account_Role>(Account_RoleTable);
