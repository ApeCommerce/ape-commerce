import db, { Transaction } from 'framework/db';

export const CountrySubdivisionTable = 'CountrySubdivision';

export interface CountrySubdivision {
  countrySubdivisionId: string,
  countryId: string,
}

export default (
  t?: Transaction,
) => (t || db)<CountrySubdivision>(CountrySubdivisionTable);
