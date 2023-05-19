import { column, createTable, dropTable, table } from '@apecommerce/ape-framework/db/utils';
import { Migration } from '@apecommerce/ape-framework/db/migration';
import { ProductAttributeValueTable } from 'bundle/core/table/ProductAttributeValue';

const migration: Migration = {
  migrationId: ProductAttributeValueTable,
  up: async (db) => {
    await createTable(
      table(db, ProductAttributeValueTable),
      column('productAttributeValueId', 'string', 'notNull', 'primary'),
      column('productAttributeId', 'string', 'notNull', 'index'),
      column('code', 'string', 'notNull', 'index'),
    );
  },
  down: async (db) => {
    await dropTable(table(db, ProductAttributeValueTable));
  },
};

export default migration;
