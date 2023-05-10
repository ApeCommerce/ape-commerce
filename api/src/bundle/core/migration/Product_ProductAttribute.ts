import { column, createTable, dropTable, table } from 'framework/db/schema';
import { Migration } from 'framework/db/migration';
import { Product_ProductAttributeTable } from 'bundle/core/table/Product_ProductAttribute';
import { ProductAttributeTable } from 'bundle/core/table/ProductAttribute';
import { ProductTable } from 'bundle/core/table/Product';

const migration: Migration = {
  migrationId: Product_ProductAttributeTable,
  up: async (db) => {
    await createTable(
      table(db, Product_ProductAttributeTable),
      column('productId', 'string', 'notNull', 'primary', ProductTable, 'cascade'),
      column('productAttributeId', 'string', 'notNull', 'primary', ProductAttributeTable, 'restrict'),
    );
  },
  down: async (db) => {
    await dropTable(table(db, Product_ProductAttributeTable));
  },
};

export default migration;
