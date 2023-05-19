import { column, createTable, dropTable, table } from '@apecommerce/ape-framework/db/utils';
import { Migration } from '@apecommerce/ape-framework/db/migration';
import { ProductAttributeTable } from 'bundle/core/table/ProductAttribute';

const migration: Migration = {
  migrationId: ProductAttributeTable,
  up: async (db) => {
    await createTable(
      table(db, ProductAttributeTable),
      column('productAttributeId', 'string', 'notNull', 'primary'),
      column('code', 'string', 'notNull', 'index'),
    );
  },
  down: async (db) => {
    await dropTable(table(db, ProductAttributeTable));
  },
};

export default migration;
