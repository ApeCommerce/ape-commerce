import { Endpoint } from '@apecommerce/ape-common/endpoint';
import schema from '../schema';

const endpoint: Endpoint = {
  path: '/doc',
  method: 'GET',
  description: 'OpenAPI specification.',
  replySchema: {
    type: 'object',
    additionalProperties: false,
    required: ['openapi', 'info', 'paths'],
    properties: {
      openapi: schema.semver,
      info: {
        type: 'object',
        additionalProperties: false,
        required: ['title', 'version'],
        properties: {
          title: schema.nonEmpty,
          version: schema.semver,
        },
      },
      paths: schema.object,
    },
  },
  replyExample: {
    openapi: '3.0.0',
    info: {
      title: 'Ape Commerce API Documentation',
      version: '1.0.0',
    },
    paths: {
      '/': {
        get: {
          description: 'Ping.',
          responses: {
            200: {
              description: 'OK',
            },
          },
        },
      },
    },
  },
};

export default endpoint;
