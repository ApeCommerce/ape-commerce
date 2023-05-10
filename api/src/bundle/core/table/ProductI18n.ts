import db, { Transaction } from 'framework/db';

export const ProductI18nTable = 'ProductI18n';

export interface ProductI18n {
  productId: string,
  languageId: string,
  name: string,
}

export default (
  t?: Transaction,
) => (t || db)<ProductI18n>(ProductI18nTable);
