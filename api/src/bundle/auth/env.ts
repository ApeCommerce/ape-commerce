import { parseNumber, parseSeconds } from 'framework/env';

export default {
  authAuthorizationExpiration: parseSeconds(process.env.AUTH_AUTHORIZATION_EXPIRATION),
  authAccountValidationExpiration: parseSeconds(process.env.AUTH_ACCOUNT_VALIDATION_EXPIRATION),
  authAccountValidationWindow: parseSeconds(process.env.AUTH_ACCOUNT_VALIDATION_PERIOD),
  authAccountValidationLimit: parseNumber(process.env.AUTH_ACCOUNT_VALIDATION_LIMIT),
  authPasswordAttemptWindow: parseSeconds(process.env.AUTH_PASSWORD_ATTEMPT_PERIOD),
  authPasswordAttemptLimit: parseNumber(process.env.AUTH_PASSWORD_ATTEMPT_LIMIT),
  authPasswordResetExpiration: parseSeconds(process.env.AUTH_PASSWORD_RESET_EXPIRATION),
  authPasswordResetWindow: parseSeconds(process.env.AUTH_PASSWORD_RESET_PERIOD),
  authPasswordResetLimit: parseNumber(process.env.AUTH_PASSWORD_RESET_LIMIT),
  authPasswordlessAuthExpiration: parseSeconds(process.env.AUTH_PASSWORDLESS_AUTH_EXPIRATION),
  authPasswordlessAuthWindow: parseSeconds(process.env.AUTH_PASSWORDLESS_AUTH_PERIOD),
  authPasswordlessAuthLimit: parseNumber(process.env.AUTH_PASSWORDLESS_AUTH_LIMIT),
};
