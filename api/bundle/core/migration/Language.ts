import { column, createTable, dropTable, table } from '@apecommerce/ape-framework/db/utils';
import { Language, LanguageTable } from 'bundle/core/table/Language';
import { Migration } from '@apecommerce/ape-framework/db/migration';

const migration: Migration = {
  migrationId: LanguageTable,
  up: async (db) => {
    await createTable(
      table(db, LanguageTable),
      column('languageId', 'string', 'notNull', 'primary'),
      column('name', 'string', 'notNull'),
      column('isEnabled', 'boolean', 'notNull', 'index'),
    );

    await db<Language>(LanguageTable).insert({
      languageId: 'en',
      name: 'English',
      isEnabled: true,
    });
  },
  down: async (db) => {
    await dropTable(table(db, LanguageTable));
  },
};

export default migration;
