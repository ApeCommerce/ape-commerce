import { AuthenticatePasswordlessRequest } from 'common/bundle/auth/endpoint/authenticatePasswordless';
import { AuthenticateRequest } from 'common/bundle/auth/endpoint/authenticate';
import { CreateAccountRequest } from 'common/bundle/auth/endpoint/createAccount';
import { GetAccountRequest } from 'common/bundle/auth/endpoint/getAccount';
import { RenewTokenRequest } from 'common/bundle/auth/endpoint/renewToken';
import { RequestPasswordlessAuthRequest } from 'common/bundle/auth/endpoint/requestPasswordlessAuth';
import { RequestPasswordResetRequest } from 'common/bundle/auth/endpoint/requestPasswordReset';
import { ResetPasswordRequest } from 'common/bundle/auth/endpoint/resetPassword';
import { sendReply, Handler } from 'framework/api';
import { ValidateAccountRequest } from 'common/bundle/auth/endpoint/validateAccount';
import auth from 'bundle/auth/service';

const authenticate: Handler = async (request, reply) => {
  sendReply(reply, await auth.authenticate(
    request.body as AuthenticateRequest,
  ));
};

const authenticatePasswordless: Handler = async (request, reply) => {
  sendReply(reply, await auth.authenticatePasswordless(
    request.body as AuthenticatePasswordlessRequest,
  ));
};

const createAccount: Handler = async (request, reply) => {
  sendReply(reply, await auth.createAccount(
    request.body as CreateAccountRequest,
  ));
};

const getAccount: Handler = async (request, reply) => {
  sendReply(reply, await auth.getAccount(
    request.query as GetAccountRequest,
  ));
};

const renewToken: Handler = async (request, reply) => {
  sendReply(reply, await auth.renewToken(
    request.body as RenewTokenRequest,
  ));
};

const requestPasswordlessAuth: Handler = async (request, reply) => {
  sendReply(reply, await auth.requestPasswordlessAuth(
    request.body as RequestPasswordlessAuthRequest,
  ));
};

const requestPasswordReset: Handler = async (request, reply) => {
  sendReply(reply, await auth.requestPasswordReset(
    request.body as RequestPasswordResetRequest,
  ));
};

const resetPassword: Handler = async (request, reply) => {
  sendReply(reply, await auth.resetPassword(
    request.body as ResetPasswordRequest,
  ));
};

const validateAccount: Handler = async (request, reply) => {
  sendReply(reply, await auth.validateAccount(
    request.body as ValidateAccountRequest,
  ));
};

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
