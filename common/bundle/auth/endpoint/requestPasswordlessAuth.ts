import { Endpoint } from '@apecommerce/ape-common/endpoint';
import { AppId } from '../../core/app';
import schema from '../../core/schema';

export interface RequestPasswordlessAuthRequest {
  email: string,
  appId: AppId,
}

const endpoint: Endpoint = {
  path: '/auth/requestPasswordlessAuth',
  method: 'POST',
  forbidden: true,
  requestSchema: {
    type: 'object',
    additionalProperties: false,
    required: ['email', 'app'],
    properties: {
      email: schema.email,
      app: schema.alphaNumeric,
    },
  },
};

export default endpoint;
