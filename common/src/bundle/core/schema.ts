export default {
  alphaNumeric: {
    type: 'string',
    pattern: '^[0-9A-Za-z]+$',
  },
  array: (items: any) => ({
    type: 'array',
    items,
  }),
  boolean: {
    type: 'boolean',
  },
  code: {
    type: 'string',
    pattern: '^[0-9A-Z-]+$',
  },
  countryId: {
    type: 'string',
    pattern: '^[A-Z]{2}$',
  },
  currencyId: {
    type: 'string',
    pattern: '^[A-Z]{3}$',
  },
  email: {
    type: 'string',
    format: 'email',
  },
  languageId: {
    type: 'string',
    pattern: '^[a-z]{2}(-[A-Z]{2})?$',
  },
  nonEmpty: {
    type: 'string',
    minLength: 1,
  },
  object: {
    type: 'object',
    additionalProperties: true,
  },
  password: {
    type: 'string',
    minLength: 8,
  },
  semver: {
    type: 'string',
    pattern: '^[0-9]+\\.[0-9]+\\.[0-9]+$',
  },
  token: {
    type: 'string',
    pattern: '^[0-9A-Za-z]+\\.[0-9A-Za-z]+\\.[0-9A-Za-z-_]+$',
  },
  uuid: {
    type: 'string',
    format: 'uuid',
  },
};
