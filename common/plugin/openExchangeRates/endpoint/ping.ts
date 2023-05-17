import { Endpoint } from '@apecommerce/ape-common/endpoint';

const endpoint: Endpoint = {
  path: '/openExchangeRates/',
  method: 'GET',
  requiredRoles: ['admin'],
  description: 'Open Exchange Rates ping !',
};

export default endpoint;
