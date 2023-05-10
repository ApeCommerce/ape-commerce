import db, { Transaction } from 'framework/db';

export const Product_ProductAttributeTable = 'Product_ProductAttribute';

export interface Product_ProductAttribute {
  productId: string,
  productAttributeId: string,
}

export default (
  t?: Transaction,
) => (t || db)<Product_ProductAttribute>(Product_ProductAttributeTable);
