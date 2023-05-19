import { Email } from '@apecommerce/ape-framework/mail/email';
import i18n from '@apecommerce/ape-framework/i18n';
import store from 'bundle/core/lib/app/store';

export default async (languageId: string, countryId: string, token: string): Promise<Email> => {
  const { dir, t } = await i18n();
  const i18nVars = { lng: languageId };

  return {
    fromName: 'Ape Commerce', // TODO
    replyTo: {
      name: 'Ape Commerce', // TODO
      email: 'store@example.com', // TODO
    },
    header: 'Ape Commerce', // TODO
    headerLink: store.url(languageId, countryId),
    subject: t('auth:email.store.accountValidation.subject', i18nVars),
    title: t('auth:email.store.accountValidation.title', i18nVars),
    intro: [t('auth:email.store.accountValidation.intro', i18nVars)],
    action: {
      instructions: t('auth:email.store.accountValidation.action.instructions', i18nVars),
      description: t('auth:email.store.accountValidation.action.description', i18nVars),
      text: t('auth:email.store.accountValidation.action.text', i18nVars),
      link: store.accountValidationUrl(languageId, countryId, token),
    },
    outro: [t('auth:email.store.accountValidation.outro', i18nVars)],
    copyright: '© 2023 Ape Commerce', // TODO
    color: '#000000', // TODO,
    textDirection: dir(languageId),
  };
};
