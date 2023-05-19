import { parseString } from '@apecommerce/ape-framework/utils';

export default {
  adminUrl: parseString(process.env.ADMIN_URL),
  storeUrl: parseString(process.env.STORE_URL),
};
