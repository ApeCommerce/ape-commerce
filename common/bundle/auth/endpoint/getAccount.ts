import { Endpoint } from '@apecommerce/ape-common/endpoint';
import schema from '../../core/schema';

export interface GetAccountRequest {
  email: string,
}

export interface GetAccountReply {
  isCreated: boolean,
  isValidated: boolean,
}

const endpoint: Endpoint = {
  path: '/auth/getAccount',
  method: 'GET',
  requestSchema: {
    type: 'object',
    additionalProperties: false,
    required: ['email'],
    properties: {
      email: schema.email,
    },
  },
  replySchema: {
    type: 'object',
    additionalProperties: false,
    required: ['isCreated', 'isValidated'],
    properties: {
      isCreated: schema.boolean,
      isValidated: schema.boolean,
    },
  },
  requestExample: {
    email: 'user@example.com',
  },
};

export default endpoint;
