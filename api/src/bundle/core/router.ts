import { Route } from 'framework/api';
import endpoint from 'common/bundle/core/endpoint';
import handler from 'bundle/core/handler';

const router: Route[] = [
  { endpoint: endpoint.ping, handler: handler.ping },
  { endpoint: endpoint.doc, handler: handler.doc },
];

export default router;
