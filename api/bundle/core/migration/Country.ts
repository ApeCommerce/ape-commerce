import { column, createTable, dropTable, table } from '@apecommerce/ape-framework/db/utils';
import { Country, CountryTable } from 'bundle/core/table/Country';
import { CurrencyTable } from 'bundle/core/table/Currency';
import { Migration } from '@apecommerce/ape-framework/db/migration';

const migration: Migration = {
  migrationId: CountryTable,
  up: async (db) => {
    await createTable(
      table(db, CountryTable),
      column('countryId', 'string', 'notNull', 'primary'),
      column('currencyId', 'string', 'notNull', 'index', CurrencyTable, 'restrict'),
      column('isEnabled', 'boolean', 'notNull', 'index'),
    );

    await db<Country>(CountryTable).insert({
      countryId: 'US',
      currencyId: 'USD',
      isEnabled: true,
    });
  },
  down: async (db) => {
    await dropTable(table(db, CountryTable));
  },
};

export default migration;
