import { column, createTable, dropTable, table } from '@apecommerce/ape-framework/db/utils';
import { CountrySubdivisionI18nTable } from 'bundle/core/table/CountrySubdivisionI18n';
import { CountrySubdivisionTable } from 'bundle/core/table/CountrySubdivision';
import { LanguageTable } from 'bundle/core/table/Language';
import { Migration } from '@apecommerce/ape-framework/db/migration';

const migration: Migration = {
  migrationId: CountrySubdivisionI18nTable,
  up: async (db) => {
    await createTable(
      table(db, CountrySubdivisionI18nTable),
      column('countrySubdivisionId', 'string', 'notNull', 'primary', CountrySubdivisionTable, 'cascade'),
      column('languageId', 'string', 'notNull', 'primary', LanguageTable, 'cascade'),
      column('name', 'string', 'notNull'),
    );
  },
  down: async (db) => {
    await dropTable(table(db, CountrySubdivisionI18nTable));
  },
};

export default migration;
