import { Transaction } from '@apecommerce/ape-framework/db/transaction';
import db from '@apecommerce/ape-framework/db';

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
