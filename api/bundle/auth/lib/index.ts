import { authorizationTokenType } from '@apecommerce/ape-framework/api';
import config from 'bundle/auth/config';

export enum TokenType {
  authorization = authorizationTokenType,
  accountValidation = 'accountValidation',
  passwordlessAuth = 'passwordlessAuth',
  passwordReset = 'passwordReset',
}

export enum RateLimiting {
  accountValidation = 'accountValidation',
  passwordAttempt = 'passwordAttempt',
  passwordlessAuth = 'passwordlessAuth',
  passwordReset = 'passwordReset',
}

export const tokenExpiration: { [tokenType in TokenType]: number } = {
  accountValidation: config.accountValidationExpiration,
  authorization: config.authorizationExpiration,
  passwordlessAuth: config.passwordlessAuthExpiration,
  passwordReset: config.passwordlessAuthExpiration,
};

const rateLimitingWindow: { [rateLimiting in RateLimiting]: number } = {
  accountValidation: config.accountValidationWindow,
  passwordAttempt: config.passwordAttemptWindow,
  passwordlessAuth: config.passwordlessAuthWindow,
  passwordReset: config.passwordResetWindow,
};

const rateLimitingLimit: { [rateLimiting in RateLimiting]: number } = {
  accountValidation: config.accountValidationLimit,
  passwordAttempt: config.passwordAttemptLimit,
  passwordlessAuth: config.passwordlessAuthLimit,
  passwordReset: config.passwordResetLimit,
};

export const formatEmail = (email: string) => email.toLowerCase();

export const rateLimit = (window: number, count: number, type: RateLimiting, timestamp: number) => {
  const newWindow = Math.floor(timestamp / rateLimitingWindow[type]);
  const newCount = window === newWindow ? count + 1 : 1;
  const isExceeded = newCount > rateLimitingLimit[type];
  return { newWindow, newCount, isExceeded };
};

export default {
  formatEmail,
  rateLimit,
  tokenExpiration,
};
