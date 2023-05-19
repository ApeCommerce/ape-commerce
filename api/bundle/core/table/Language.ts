import { Transaction } from '@apecommerce/ape-framework/db/transaction';
import db from '@apecommerce/ape-framework/db';

export const LanguageTable = 'Language';

export interface Language {
  languageId: string,
  name: string,
  isEnabled: boolean,
}

export default (
  t?: Transaction,
) => (t || db)<Language>(LanguageTable);
