import { Transaction } from '@apecommerce/ape-framework/db/transaction';
import db from '@apecommerce/ape-framework/db';

export const ProductAttributeTable = 'ProductAttribute';

export interface ProductAttribute {
  productAttributeId: string,
  code: string,
}

export default (
  t?: Transaction,
) => (t || db)<ProductAttribute>(ProductAttributeTable);
