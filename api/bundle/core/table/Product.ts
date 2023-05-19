import { Transaction } from '@apecommerce/ape-framework/db/transaction';
import db from '@apecommerce/ape-framework/db';

export const ProductTable = 'Product';

export interface Product {
  productId: string,
  code: string,
  isEnabled: boolean,
}

export default (
  t?: Transaction,
) => (t || db)<Product>(ProductTable);
