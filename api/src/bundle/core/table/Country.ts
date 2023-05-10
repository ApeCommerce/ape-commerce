import db, { Transaction } from 'framework/db';

export const CountryTable = 'Country';

export interface Country {
  countryId: string,
  currencyId: string,
  isEnabled: boolean,
}

export default (
  t?: Transaction,
) => (t || db)<Country>(CountryTable);
