import authenticate from 'bundle/auth/service/authenticate';
import authenticatePasswordless from 'bundle/auth/service/authenticatePasswordless';
import createAccount from 'bundle/auth/service/createAccount';
import getAccount from 'bundle/auth/service/getAccount';
import renewToken from 'bundle/auth/service/renewToken';
import requestPasswordlessAuth from 'bundle/auth/service/requestPasswordlessAuth';
import requestPasswordReset from 'bundle/auth/service/requestPasswordReset';
import resetPassword from 'bundle/auth/service/resetPassword';
import validateAccount from 'bundle/auth/service/validateAccount';

export default {
  authenticate,
  authenticatePasswordless,
  createAccount,
  getAccount,
  renewToken,
  requestPasswordlessAuth,
  requestPasswordReset,
  resetPassword,
  validateAccount,
};
