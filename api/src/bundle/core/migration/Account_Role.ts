import { Account_RoleTable } from 'bundle/core/table/Account_Role';
import { AccountTable } from 'bundle/core/table/Account';
import { column, createTable, dropTable, table } from 'framework/db/schema';
import { Migration } from 'framework/db/migration';
import { RoleTable } from 'bundle/core/table/Role';

const migration: Migration = {
  migrationId: Account_RoleTable,
  up: async (db) => {
    await createTable(
      table(db, Account_RoleTable),
      column('accountId', 'string', 'notNull', 'primary', AccountTable, 'cascade'),
      column('roleId', 'string', 'notNull', 'primary', RoleTable, 'restrict'),
    );
  },
  down: async (db) => {
    await dropTable(table(db, Account_RoleTable));
  },
};

export default migration;
