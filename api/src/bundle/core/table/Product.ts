import db, { Transaction } from 'framework/db';

export const ProductTable = 'Product';

export interface Product {
  productId: string,
  code: string,
  isEnabled: boolean,
}

export default (
  t?: Transaction,
) => (t || db)<Product>(ProductTable);
