import { column, createTable, dropTable, table } from '@apecommerce/ape-framework/db/utils';
import { Migration } from '@apecommerce/ape-framework/db/migration';
import { Role, RoleTable } from 'bundle/core/table/Role';

const migration: Migration = {
  migrationId: RoleTable,
  up: async (db) => {
    await createTable(
      table(db, RoleTable),
      column('roleId', 'string', 'notNull', 'primary'),
    );

    await db<Role>(RoleTable).insert([
      { roleId: 'admin' },
      { roleId: 'user' },
    ]);
  },
  down: async (db) => {
    await dropTable(table(db, RoleTable));
  },
};

export default migration;
