import { column, createTable, dropTable, table } from '@apecommerce/ape-framework/db/utils';
import { Migration } from '@apecommerce/ape-framework/db/migration';
import { ProductItemTable } from 'bundle/core/table/ProductItem';

const migration: Migration = {
  migrationId: ProductItemTable,
  up: async (db) => {
    await createTable(
      table(db, ProductItemTable),
      column('productItemId', 'string', 'notNull', 'primary'),
      column('productId', 'string', 'notNull', 'index'),
      column('sku', 'string', 'notNull', 'index'),
      column('quantity', 'integer', 'null', 'index'),
      column('basePrice', 'decimal', 'notNull', 'index'),
      column('finalPrice', 'decimal', 'notNull', 'index'),
    );
  },
  down: async (db) => {
    await dropTable(table(db, ProductItemTable));
  },
};

export default migration;
