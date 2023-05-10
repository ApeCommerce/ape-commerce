import { column, createTable, dropTable, table } from 'framework/db/schema';
import { CountrySubdivisionTable } from 'bundle/core/table/CountrySubdivision';
import { CountryTable } from 'bundle/core/table/Country';
import { Migration } from 'framework/db/migration';

const migration: Migration = {
  migrationId: CountrySubdivisionTable,
  up: async (db) => {
    await createTable(
      table(db, CountrySubdivisionTable),
      column('countrySubdivisionId', 'string', 'notNull', 'primary'),
      column('countryId', 'string', 'notNull', 'index', CountryTable, 'cascade'),
    );
  },
  down: async (db) => {
    await dropTable(table(db, CountrySubdivisionTable));
  },
};

export default migration;
