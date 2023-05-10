import db, { Transaction } from 'framework/db';

export const LanguageTable = 'Language';

export interface Language {
  languageId: string,
  name: string,
  isEnabled: boolean,
}

export default (
  t?: Transaction,
) => (t || db)<Language>(LanguageTable);
