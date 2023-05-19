import { Transaction } from '@apecommerce/ape-framework/db/transaction';
import db from '@apecommerce/ape-framework/db';

export const ProductI18nTable = 'ProductI18n';

export interface ProductI18n {
  productId: string,
  languageId: string,
  name: string,
}

export default (
  t?: Transaction,
) => (t || db)<ProductI18n>(ProductI18nTable);
