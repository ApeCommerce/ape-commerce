import { AccountSettingTable } from 'bundle/core/table/AccountSetting';
import { AccountTable } from 'bundle/core/table/Account';
import { column, createTable, dropTable, table } from 'framework/db/schema';
import { CountryTable } from 'bundle/core/table/Country';
import { LanguageTable } from 'bundle/core/table/Language';
import { Migration } from 'framework/db/migration';

const migration: Migration = {
  migrationId: AccountSettingTable,
  up: async (db) => {
    await createTable(
      table(db, AccountSettingTable),
      column('accountId', 'string', 'notNull', 'primary', AccountTable, 'cascade'),
      column('languageId', 'string', 'notNull', 'index', LanguageTable, 'restrict'),
      column('countryId', 'string', 'notNull', 'index', CountryTable, 'restrict'),
    );
  },
  down: async (db) => {
    await dropTable(table(db, AccountSettingTable));
  },
};

export default migration;
