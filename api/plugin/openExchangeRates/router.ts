import { Route } from '@apecommerce/ape-framework/api/route';
import endpoint from 'common/plugin/openExchangeRates/endpoint';
import handler from 'plugin/openExchangeRates/handler';

const router: Route[] = [
  { endpoint: endpoint.ping, handler: handler.ping },
];

export default router;
