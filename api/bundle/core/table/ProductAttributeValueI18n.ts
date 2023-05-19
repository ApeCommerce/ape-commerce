import { Transaction } from '@apecommerce/ape-framework/db/transaction';
import db from '@apecommerce/ape-framework/db';

export const ProductAttributeValueI18nTable = 'ProductAttributeValueI18n';

export interface ProductAttributeValueI18n {
  productAttributeValueId: string,
  languageId: string,
  name: string,
}

export default (
  t?: Transaction,
) => (t || db)<ProductAttributeValueI18n>(ProductAttributeValueI18nTable);
