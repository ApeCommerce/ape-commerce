import { Transaction } from '@apecommerce/ape-framework/db/transaction';
import db from '@apecommerce/ape-framework/db';

export const CountrySubdivisionTable = 'CountrySubdivision';

export interface CountrySubdivision {
  countrySubdivisionId: string,
  countryId: string,
}

export default (
  t?: Transaction,
) => (t || db)<CountrySubdivision>(CountrySubdivisionTable);
