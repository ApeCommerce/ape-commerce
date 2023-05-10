import { Endpoint } from '../../../framework/endpoint';
import schema from '../../core/schema';

export interface AuthenticatePasswordlessRequest {
  token: string,
}

export interface AuthenticatePasswordlessReply {
  token: string,
}

const endpoint: Endpoint = {
  path: '/auth/authenticatePasswordless',
  method: 'POST',
  forbidden: true,
  requestSchema: {
    type: 'object',
    additionalProperties: false,
    required: ['token'],
    properties: {
      token: schema.token,
    },
  },
  replySchema: {
    type: 'object',
    additionalProperties: false,
    required: ['token'],
    properties: {
      token: schema.token,
    },
  },
};

export default endpoint;
