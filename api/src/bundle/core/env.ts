import { parseString } from 'framework/env';

export default {
  adminUrl: parseString(process.env.ADMIN_URL),
  storeUrl: parseString(process.env.STORE_URL),
};
