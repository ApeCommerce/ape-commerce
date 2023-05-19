import api from '@apecommerce/ape-framework/api';
import db from '@apecommerce/ape-framework/db';
import schema from '@apecommerce/ape-framework/db/schema';

export const apiUrl = () => api.getUrl() || '';

export const before = async () => {
  await schema.runMigrations();
  await api.start();
};

export const after = async () => {
  await api.close();
  await schema.rollbackMigrations();
  await db.destroy();
};
