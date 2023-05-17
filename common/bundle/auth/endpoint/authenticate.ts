import { Endpoint } from '@apecommerce/ape-common/endpoint';
import schema from '../../core/schema';

export interface AuthenticateRequest {
  email: string,
  password: string,
}

export interface AuthenticateReply {
  token: string,
}

const endpoint: Endpoint = {
  path: '/auth/authenticate',
  method: 'POST',
  forbidden: true,
  requestSchema: {
    type: 'object',
    additionalProperties: false,
    required: ['email', 'password'],
    properties: {
      email: schema.email,
      password: schema.password,
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
