import { Transaction } from '@apecommerce/ape-framework/db/transaction';
import db from '@apecommerce/ape-framework/db';

export const ProductAttributeI18nTable = 'ProductAttributeI18n';

export interface ProductAttributeI18n {
  productAttributeId: string,
  languageId: string,
  name: string,
}

export default (
  t?: Transaction,
) => (t || db)<ProductAttributeI18n>(ProductAttributeI18nTable);
