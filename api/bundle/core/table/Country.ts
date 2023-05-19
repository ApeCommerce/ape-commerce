import { Transaction } from '@apecommerce/ape-framework/db/transaction';
import db from '@apecommerce/ape-framework/db';

export const CountryTable = 'Country';

export interface Country {
  countryId: string,
  currencyId: string,
  isEnabled: boolean,
}

export default (
  t?: Transaction,
) => (t || db)<Country>(CountryTable);
