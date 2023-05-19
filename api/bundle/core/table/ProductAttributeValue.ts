import { Transaction } from '@apecommerce/ape-framework/db/transaction';
import db from '@apecommerce/ape-framework/db';

export const ProductAttributeValueTable = 'ProductAttributeValue';

export interface ProductAttributeValue {
  productAttributeValueId: string,
  productAttributeId: string,
  code: string,
}

export default (
  t?: Transaction,
) => (t || db)<ProductAttributeValue>(ProductAttributeValueTable);
