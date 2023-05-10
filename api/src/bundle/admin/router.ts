import { Route } from 'framework/api';
import endpoint from 'common/bundle/admin/endpoint';
import handler from 'bundle/admin/handler';

const router: Route[] = [
  { endpoint: endpoint.ping, handler: handler.ping },
];

export default router;
