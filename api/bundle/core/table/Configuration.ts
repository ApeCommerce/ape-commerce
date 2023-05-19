import { Transaction } from '@apecommerce/ape-framework/db/transaction';
import db from '@apecommerce/ape-framework/db';

export const ConfigurationTable = 'Configuration';

export interface Configuration {
  languageId: string,
  currencyId: string,
}

export default (
  t?: Transaction,
) => (t || db)<Configuration>(ConfigurationTable);
