import { column, createTable, dropTable, table } from 'framework/db/schema';
import { Migration } from 'framework/db/migration';
import { ProductAttributeValueTable } from 'bundle/core/table/ProductAttributeValue';
import { ProductItem_ProductAttributeValueTable } from 'bundle/core/table/ProductItem_ProductAttributeValue';
import { ProductItemTable } from 'bundle/core/table/ProductItem';

const migration: Migration = {
  migrationId: ProductItem_ProductAttributeValueTable,
  up: async (db) => {
    await createTable(
      table(db, ProductItem_ProductAttributeValueTable),
      column('productItemId', 'string', 'notNull', 'primary', ProductItemTable, 'cascade'),
      column('productAttributeValueId', 'string', 'notNull', 'primary', ProductAttributeValueTable, 'restrict'),
    );
  },
  down: async (db) => {
    await dropTable(table(db, ProductItem_ProductAttributeValueTable));
  },
};

export default migration;
