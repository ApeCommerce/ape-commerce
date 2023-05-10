import { column, createTable, dropTable, table } from 'framework/db/schema';
import { LanguageTable } from 'bundle/core/table/Language';
import { Migration } from 'framework/db/migration';
import { ProductI18nTable } from 'bundle/core/table/ProductI18n';
import { ProductTable } from 'bundle/core/table/Product';

const migration: Migration = {
  migrationId: ProductI18nTable,
  up: async (db) => {
    await createTable(
      table(db, ProductI18nTable),
      column('productId', 'string', 'notNull', 'primary', ProductTable, 'cascade'),
      column('languageId', 'string', 'notNull', 'primary', LanguageTable, 'cascade'),
      column('name', 'string', 'notNull'),
    );
  },
  down: async (db) => {
    await dropTable(table(db, ProductI18nTable));
  },
};

export default migration;
