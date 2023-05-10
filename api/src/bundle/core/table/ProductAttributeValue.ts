import db, { Transaction } from 'framework/db';

export const ProductAttributeValueTable = 'ProductAttributeValue';

export interface ProductAttributeValue {
  productAttributeValueId: string,
  productAttributeId: string,
  code: string,
}

export default (
  t?: Transaction,
) => (t || db)<ProductAttributeValue>(ProductAttributeValueTable);
