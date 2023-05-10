import { Translation } from 'framework/i18n';

const translation: Translation = {
  languageId: 'fr',
  dictionary: {
    email: {
      admin: {
        passwordReset: {
          subject: 'Réinitialisation du mot de passe',
          title: 'Bonjour !',
          intro: 'Vous avez demandé une réinitialisation de mot de passe.',
          action: {
            instructions: 'Pour réinitialiser votre mot de passe, veuillez cliquer sur le lien ci-dessous :',
            description: 'Réinitialisez votre mot de passe',
            text: 'RÉINITIALISER',
          },
        },
        passwordlessAuth: {
          subject: 'Authentification sans mot de passe',
          title: 'Bonjour !',
          intro: 'Vous avez demandé une authentification sans mot de passe.',
          action: {
            instructions: 'Pour vous authentifier sans mot de passe, veuillez cliquer sur le lien ci-dessous :',
            description: 'Authentifiez-vous sans mot de passe',
            text: 'S\'AUTHENTIFIER',
          },
        },
      },
      store: {
        accountValidation: {
          subject: 'Validation du compte',
          title: 'Bienvenue !',
          intro: 'Vous avez créé un compte sur {{storeName}}.',
          action: {
            instructions: 'Pour valider votre compte, veuillez cliquer sur le lien ci-dessous :',
            description: 'Validez votre compte {{storeName}}',
            text: 'VALIDER',
          },
          outro: 'Si vous avez des questions ou besoin d\'aide, veuillez nous contacter à l\'adresse : {{storeEmail}}.',
        },
        passwordReset: {
          subject: 'Réinitialisation du mot de passe',
          title: 'Bonjour !',
          intro: 'Vous avez demandé une réinitialisation de mot de passe sur {{storeName}}.',
          action: {
            instructions: 'Pour réinitialiser votre mot de passe, veuillez cliquer sur le lien ci-dessous :',
            description: 'Réinitialisez votre mot de passe {{storeName}}',
            text: 'RÉINITIALISER',
          },
          outro: 'Si vous avez des questions ou besoin d\'aide, veuillez nous contacter à l\'adresse : {{storeEmail}}.',
        },
        passwordlessAuth: {
          subject: 'Authentification sans mot de passe',
          title: 'Bonjour !',
          intro: 'Vous avez demandé une authentification sans mot de passe sur {{storeName}}.',
          action: {
            instructions: 'Pour vous authentifier sans mot de passe, veuillez cliquer sur le lien ci-dessous :',
            description: 'Authentifiez-vous sur {{storeName}} sans mot de passe',
            text: 'S\'AUTHENTIFIER',
          },
          outro: 'Si vous avez des questions ou besoin d\'aide, veuillez nous contacter à l\'adresse : {{storeEmail}}.',
        },
      },
    },
  },
};

export default translation;
