import { column, createTable, dropTable, table } from 'framework/db/schema';
import { LanguageTable } from 'bundle/core/table/Language';
import { Migration } from 'framework/db/migration';
import { ProductAttributeI18nTable } from 'bundle/core/table/ProductAttributeI18n';
import { ProductAttributeTable } from 'bundle/core/table/ProductAttribute';

const migration: Migration = {
  migrationId: ProductAttributeI18nTable,
  up: async (db) => {
    await createTable(
      table(db, ProductAttributeI18nTable),
      column('productAttributeId', 'string', 'notNull', 'primary', ProductAttributeTable, 'cascade'),
      column('languageId', 'string', 'notNull', 'primary', LanguageTable, 'cascade'),
      column('name', 'string', 'notNull'),
    );
  },
  down: async (db) => {
    await dropTable(table(db, ProductAttributeI18nTable));
  },
};

export default migration;
