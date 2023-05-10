import db, { Transaction } from 'framework/db';

export const ConfigurationTable = 'Configuration';

export interface Configuration {
  languageId: string,
  currencyId: string,
}

export default (
  t?: Transaction,
) => (t || db)<Configuration>(ConfigurationTable);
