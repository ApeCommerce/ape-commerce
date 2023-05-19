import { Transaction } from '@apecommerce/ape-framework/db/transaction';
import db from '@apecommerce/ape-framework/db';

export const CountrySubdivisionI18nTable = 'CountrySubdivisionI18n';

export interface CountrySubdivisionI18n {
  countrySubdivisionId: string,
  languageId: string,
  name: string,
}

export default (
  t?: Transaction,
) => (t || db)<CountrySubdivisionI18n>(CountrySubdivisionI18nTable);
