import { column, createTable, dropTable, table } from '@apecommerce/ape-framework/db/utils';
import { CountryI18n, CountryI18nTable } from 'bundle/core/table/CountryI18n';
import { CountryTable } from 'bundle/core/table/Country';
import { LanguageTable } from 'bundle/core/table/Language';
import { Migration } from '@apecommerce/ape-framework/db/migration';

const migration: Migration = {
  migrationId: CountryI18nTable,
  up: async (db) => {
    await createTable(
      table(db, CountryI18nTable),
      column('countryId', 'string', 'notNull', 'primary', CountryTable, 'cascade'),
      column('languageId', 'string', 'notNull', 'primary', LanguageTable, 'cascade'),
      column('name', 'string', 'notNull'),
    );

    await db<CountryI18n>(CountryI18nTable).insert({
      countryId: 'US',
      languageId: 'en',
      name: 'United States',
    });
  },
  down: async (db) => {
    await dropTable(table(db, CountryI18nTable));
  },
};

export default migration;
