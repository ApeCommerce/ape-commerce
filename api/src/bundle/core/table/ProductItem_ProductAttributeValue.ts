import db, { Transaction } from 'framework/db';

export const ProductItem_ProductAttributeValueTable = 'ProductItem_ProductAttributeValue';

export interface ProductItem_ProductAttributeValue {
  productItemId: string,
  productAttributeValueId: string,
}

export default (
  t?: Transaction,
) => (t || db)<ProductItem_ProductAttributeValue>(ProductItem_ProductAttributeValueTable);
