import { parseSeconds } from 'framework/env';
import env from 'bundle/auth/env';

export default {
  authorizationExpiration: env.authAuthorizationExpiration || parseSeconds('5d'),
  accountValidationExpiration: env.authAccountValidationExpiration || parseSeconds('3d'),
  accountValidationWindow: env.authAccountValidationWindow || parseSeconds('3d'),
  accountValidationLimit: env.authAccountValidationLimit || 1,
  passwordAttemptWindow: env.authPasswordAttemptWindow || parseSeconds('1h'),
  passwordAttemptLimit: env.authPasswordAttemptLimit || 5,
  passwordResetExpiration: env.authPasswordResetExpiration || parseSeconds('30m'),
  passwordResetWindow: env.authPasswordResetWindow || parseSeconds('1d'),
  passwordResetLimit: env.authPasswordResetLimit || 5,
  passwordlessAuthExpiration: env.authPasswordlessAuthExpiration || parseSeconds('30m'),
  passwordlessAuthWindow: env.authPasswordlessAuthWindow || parseSeconds('1d'),
  passwordlessAuthLimit: env.authPasswordlessAuthLimit || 10,
};
