import { Email } from 'framework/mail/module';
import admin from 'bundle/core/lib/app/admin';
import i18n from 'framework/i18n';

export default async (languageId: string, token: string): Promise<Email> => {
  const { dir, t } = await i18n();
  const i18nVars = { lng: languageId };

  return {
    fromName: 'Ape Commerce', // TODO
    replyTo: {
      name: 'Ape Commerce', // TODO
      email: 'store@example.com', // TODO
    },
    header: 'Ape Commerce', // TODO
    headerLink: admin.url,
    subject: t('auth:email.admin.passwordReset.subject', i18nVars),
    title: t('auth:email.admin.passwordReset.title', i18nVars),
    intro: [t('auth:email.admin.passwordReset.intro', i18nVars)],
    action: {
      instructions: t('auth:email.admin.passwordReset.action.instructions', i18nVars),
      description: t('auth:email.admin.passwordReset.action.description', i18nVars),
      text: t('auth:email.admin.passwordReset.action.text', i18nVars),
      link: admin.passwordResetUrl(token),
    },
    copyright: '© 2023 Ape Commerce', // TODO
    color: '#000000', // TODO,
    textDirection: dir(languageId),
  };
};
