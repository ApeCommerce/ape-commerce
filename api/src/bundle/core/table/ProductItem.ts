import db, { Transaction } from 'framework/db';

export const ProductItemTable = 'ProductItem';

export interface ProductItem {
  productItemId: string,
  productId: string,
  sku: string,
  quantity: number | null,
  basePrice: number,
  finalPrice: number,
}

export default (
  t?: Transaction,
) => (t || db)<ProductItem>(ProductItemTable);
