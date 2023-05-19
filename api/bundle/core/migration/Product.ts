import { column, createTable, dropTable, table } from '@apecommerce/ape-framework/db/utils';
import { Migration } from '@apecommerce/ape-framework/db/migration';
import { ProductTable } from 'bundle/core/table/Product';

const migration: Migration = {
  migrationId: ProductTable,
  up: async (db) => {
    await createTable(
      table(db, ProductTable),
      column('productId', 'string', 'notNull', 'primary'),
      column('code', 'string', 'notNull', 'index'),
      column('isEnabled', 'boolean', 'notNull', 'index'),
    );
  },
  down: async (db) => {
    await dropTable(table(db, ProductTable));
  },
};

export default migration;
