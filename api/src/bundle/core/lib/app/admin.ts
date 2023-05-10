import config from 'bundle/core/config';

const url = config.adminUrl;

const passwordlessAuthUrl = (token: string) => (
  `${url}/auth/passwordless-auth?token=${token}`
);

const passwordResetUrl = (token: string) => (
  `${url}/auth/password-reset?token=${token}`
);

export default {
  url,
  passwordlessAuthUrl,
  passwordResetUrl,
};
