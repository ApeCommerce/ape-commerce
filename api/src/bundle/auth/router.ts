import { Route } from 'framework/api';
import endpoint from 'common/bundle/auth/endpoint';
import handler from 'bundle/auth/handler';

const router: Route[] = [
  { endpoint: endpoint.getAccount, handler: handler.getAccount },
  { endpoint: endpoint.createAccount, handler: handler.createAccount },
  { endpoint: endpoint.validateAccount, handler: handler.validateAccount },
  { endpoint: endpoint.authenticate, handler: handler.authenticate },
  { endpoint: endpoint.renewToken, handler: handler.renewToken },
  { endpoint: endpoint.requestPasswordReset, handler: handler.requestPasswordReset },
  { endpoint: endpoint.resetPassword, handler: handler.resetPassword },
  { endpoint: endpoint.requestPasswordlessAuth, handler: handler.requestPasswordlessAuth },
  { endpoint: endpoint.authenticatePasswordless, handler: handler.authenticatePasswordless },
];

export default router;
