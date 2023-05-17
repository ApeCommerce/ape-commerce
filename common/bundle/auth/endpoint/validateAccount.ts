import { Endpoint } from '@apecommerce/ape-common/endpoint';
import schema from '../../core/schema';

export interface ValidateAccountRequest {
  token: string,
}

export interface ValidateAccountReply {
  token: string,
}

const endpoint: Endpoint = {
  path: '/auth/validateAccount',
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
