import { Endpoint } from '../../../framework/endpoint';

const endpoint: Endpoint = {
  path: '/openExchangeRates/',
  method: 'GET',
  requiredRoles: ['admin'],
  description: 'Open Exchange Rates ping !',
};

export default endpoint;
