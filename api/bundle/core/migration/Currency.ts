import { column, createTable, dropTable, table } from '@apecommerce/ape-framework/db/utils';
import { Currency, CurrencyTable } from 'bundle/core/table/Currency';
import { Migration } from '@apecommerce/ape-framework/db/migration';

const migration: Migration = {
  migrationId: CurrencyTable,
  up: async (db) => {
    await createTable(
      table(db, CurrencyTable),
      column('currencyId', 'string', 'notNull', 'primary'),
      column('rate', 'decimal', 'notNull'),
    );

    await db<Currency>(CurrencyTable).insert({
      currencyId: 'USD',
      rate: 1,
    });
  },
  down: async (db) => {
    await dropTable(table(db, CurrencyTable));
  },
};

export default migration;
