import { AccountTable } from 'bundle/core/table/Account';
import { column, createTable, dropTable, table } from 'framework/db/schema';
import { Migration } from 'framework/db/migration';

const migration: Migration = {
  migrationId: AccountTable,
  up: async (db) => {
    await createTable(
      table(db, AccountTable),
      column('accountId', 'string', 'notNull', 'primary'),
      column('email', 'string', 'notNull', 'unique'),
      column('passwordHash', 'string', 'notNull'),
      column('isValidated', 'boolean', 'notNull', 'index'),
      column('isEnabled', 'boolean', 'notNull', 'index'),
      column('creationTs', 'integer', 'notNull', 'index'),
      column('authenticationTs', 'integer', 'null', 'index'),
      column('validationWindow', 'integer', 'notNull'),
      column('validationCount', 'integer', 'notNull'),
      column('passwordAttemptWindow', 'integer', 'notNull'),
      column('passwordAttemptCount', 'integer', 'notNull'),
      column('passwordResetWindow', 'integer', 'notNull'),
      column('passwordResetCount', 'integer', 'notNull'),
      column('passwordlessAuthWindow', 'integer', 'notNull'),
      column('passwordlessAuthCount', 'integer', 'notNull'),
    );
  },
  down: async (db) => {
    await dropTable(table(db, AccountTable));
  },
};

export default migration;
