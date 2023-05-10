import db, { Transaction } from 'framework/db';

export const CountryI18nTable = 'CountryI18n';

export interface CountryI18n {
  countryId: string,
  languageId: string,
  name: string,
}

export default (
  t?: Transaction,
) => (t || db)<CountryI18n>(CountryI18nTable);
