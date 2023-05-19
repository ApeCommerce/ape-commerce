import { Email } from '@apecommerce/ape-framework/mail/email';
import admin from 'bundle/core/lib/app/admin';
import i18n from '@apecommerce/ape-framework/i18n';

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
    subject: t('auth:email.admin.passwordlessAuth.subject', i18nVars),
    title: t('auth:email.admin.passwordlessAuth.title', i18nVars),
    intro: [t('auth:email.admin.passwordlessAuth.intro', i18nVars)],
    action: {
      instructions: t('auth:email.admin.passwordlessAuth.action.instructions', i18nVars),
      description: t('auth:email.admin.passwordlessAuth.action.description', i18nVars),
      text: t('auth:email.admin.passwordlessAuth.action.text', i18nVars),
      link: admin.passwordlessAuthUrl(token),
    },
    copyright: '© 2023 Ape Commerce', // TODO
    color: '#000000', // TODO,
    textDirection: dir(languageId),
  };
};
