import { column, createTable, dropTable, table } from 'framework/db/schema';
import { Configuration, ConfigurationTable } from 'bundle/core/table/Configuration';
import { CurrencyTable } from 'bundle/core/table/Currency';
import { LanguageTable } from 'bundle/core/table/Language';
import { Migration } from 'framework/db/migration';

const migration: Migration = {
  migrationId: ConfigurationTable,
  up: async (db) => {
    await createTable(
      table(db, ConfigurationTable),
      column('languageId', 'string', 'notNull', 'noIndex', LanguageTable, 'restrict'),
      column('currencyId', 'string', 'notNull', 'noIndex', CurrencyTable, 'restrict'),
    );

    await db<Configuration>(ConfigurationTable).insert({
      languageId: 'en',
      currencyId: 'USD',
    });
  },
  down: async (db) => {
    await dropTable(table(db, ConfigurationTable));
  },
};

export default migration;
