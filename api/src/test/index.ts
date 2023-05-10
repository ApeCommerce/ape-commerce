import api from 'framework/api';
import db from 'framework/db';
import migration from 'framework/db/migration';

export const apiUrl = () => api.getUrl() || '';

export const before = async () => {
  await migration.runMigrations();
  await api.start();
};

export const after = async () => {
  await api.close();
  await migration.rollbackMigrations();
  await db.destroy();
};
