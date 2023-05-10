import db, { Transaction } from 'framework/db';

export const CurrencyTable = 'Currency';

export interface Currency {
  currencyId: string,
  rate: number,
}

export default (
  t?: Transaction,
) => (t || db)<Currency>(CurrencyTable);
