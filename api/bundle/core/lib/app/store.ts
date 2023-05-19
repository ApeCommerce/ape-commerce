import config from 'bundle/core/config';

const url = (languageId?: string, countryId?: string) => (
  `${config.storeUrl}/${countryId}/${languageId}`.toLowerCase()
);

const accountValidationUrl = (languageId: string, countryId: string, token: string) => (
  `${url(languageId, countryId)}/auth/account-validation?token=${token}`
);

const passwordlessAuthUrl = (languageId: string, countryId: string, token: string) => (
  `${url(languageId, countryId)}/auth/passwordless-auth?token=${token}`
);

const passwordResetUrl = (languageId: string, countryId: string, token: string) => (
  `${url(languageId, countryId)}/auth/password-reset?token=${token}`
);

export default {
  url,
  accountValidationUrl,
  passwordlessAuthUrl,
  passwordResetUrl,
};
