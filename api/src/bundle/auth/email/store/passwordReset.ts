import { Email } from 'framework/mail/module';
import i18n from 'framework/i18n';
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
    subject: t('auth:email.store.passwordReset.subject', i18nVars),
    title: t('auth:email.store.passwordReset.title', i18nVars),
    intro: [t('auth:email.store.passwordReset.intro', i18nVars)],
    action: {
      instructions: t('auth:email.store.passwordReset.action.instructions', i18nVars),
      description: t('auth:email.store.passwordReset.action.description', i18nVars),
      text: t('auth:email.store.passwordReset.action.text', i18nVars),
      link: store.passwordResetUrl(languageId, countryId, token),
    },
    outro: [t('auth:email.store.passwordReset.outro', i18nVars)],
    copyright: '© 2023 Ape Commerce', // TODO
    color: '#000000', // TODO,
    textDirection: dir(languageId),
  };
};
