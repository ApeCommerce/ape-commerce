import { Translation } from '@apecommerce/ape-framework/i18n/translation';

const translation: Translation = {
  languageId: 'en',
  dictionary: {
    email: {
      admin: {
        passwordReset: {
          subject: 'Password reset',
          title: 'Hi!',
          intro: 'You requested a password reset.',
          action: {
            instructions: 'To reset your password, please click the link below:',
            description: 'Reset your password',
            text: 'RESET PASSWORD',
          },
        },
        passwordlessAuth: {
          subject: 'Passwordless authentication',
          title: 'Hi!',
          intro: 'You requested a passwordless authentication.',
          action: {
            instructions: 'To authenticate passwordless, please click the link below:',
            description: 'Authenticate passwordless',
            text: 'AUTHENTICATE PASSWORDLESS',
          },
        },
      },
      store: {
        accountValidation: {
          subject: 'Account validation',
          title: 'Welcome!',
          intro: 'You created an account on {{storeName}}.',
          action: {
            instructions: 'To validate your account, please click the link below:',
            description: 'Validate your {{storeName}} account',
            text: 'VALIDATE ACCOUNT',
          },
          outro: 'If you have any questions or need help, please contact us at: {{storeEmail}}.',
        },
        passwordReset: {
          subject: 'Password reset',
          title: 'Hi!',
          intro: 'You requested a password reset on {{storeName}}.',
          action: {
            instructions: 'To reset your password, please click the link below:',
            description: 'Reset your {{storeName}} password',
            text: 'RESET PASSWORD',
          },
          outro: 'If you have any questions or need help, please contact us at: {{storeEmail}}.',
        },
        passwordlessAuth: {
          subject: 'Passwordless authentication',
          title: 'Hi!',
          intro: 'You requested a passwordless authentication on {{storeName}}.',
          action: {
            instructions: 'To authenticate passwordless, please click the link below:',
            description: 'Authenticate on {{storeName}} passwordless',
            text: 'AUTHENTICATE PASSWORDLESS',
          },
          outro: 'If you have any questions or need help, please contact us at: {{storeEmail}}.',
        },
      },
    },
  },
};

export default translation;
