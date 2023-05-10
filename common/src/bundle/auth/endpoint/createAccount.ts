import { Endpoint } from '../../../framework/endpoint';
import schema from '../../core/schema';

export interface CreateAccountRequest {
  email: string,
  password: string,
  languageId: string,
  countryId: string,
}

const endpoint: Endpoint = {
  path: '/auth/createAccount',
  method: 'POST',
  forbidden: true,
  requestSchema: {
    type: 'object',
    additionalProperties: false,
    required: ['email', 'password', 'languageId', 'countryId'],
    properties: {
      email: schema.email,
      password: schema.password,
      languageId: schema.languageId,
      countryId: schema.countryId,
    },
  },
  requestExample: {
    email: 'user@example.com',
    password: 'password',
    languageId: 'en',
    countryId: 'US',
  },
};

export default endpoint;
