import { Endpoint } from '../../../framework/endpoint';
import schema from '../../core/schema';

export interface ResetPasswordRequest {
  token: string,
  password: string,
}

export interface ResetPasswordReply {
  token: string,
}

const endpoint: Endpoint = {
  path: '/auth/resetPassword',
  method: 'POST',
  forbidden: true,
  requestSchema: {
    type: 'object',
    additionalProperties: false,
    required: ['token', 'password'],
    properties: {
      token: schema.token,
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
