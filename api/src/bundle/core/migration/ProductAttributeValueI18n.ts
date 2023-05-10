import { column, createTable, dropTable, table } from 'framework/db/schema';
import { LanguageTable } from 'bundle/core/table/Language';
import { Migration } from 'framework/db/migration';
import { ProductAttributeValueI18nTable } from 'bundle/core/table/ProductAttributeValueI18n';
import { ProductAttributeValueTable } from 'bundle/core/table/ProductAttributeValue';

const migration: Migration = {
  migrationId: ProductAttributeValueI18nTable,
  up: async (db) => {
    await createTable(
      table(db, ProductAttributeValueI18nTable),
      column('productAttributeValueId', 'string', 'notNull', 'primary', ProductAttributeValueTable, 'cascade'),
      column('languageId', 'string', 'notNull', 'primary', LanguageTable, 'cascade'),
      column('name', 'string', 'notNull'),
    );
  },
  down: async (db) => {
    await dropTable(table(db, ProductAttributeValueI18nTable));
  },
};

export default migration;
