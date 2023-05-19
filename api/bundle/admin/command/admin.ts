import { Command } from '@apecommerce/ape-framework/cli/command';
import { exit, formatList, formatTable, formatText, writeLn } from '@apecommerce/ape-framework/cli/utils';
import { parseString, timestamp, uuid } from '@apecommerce/ape-framework/utils';
import { RoleId } from 'common/bundle/core/role';
import Account_RoleQuery, { Account_RoleTable } from 'bundle/core/table/Account_Role';
import AccountQuery, { AccountTable } from 'bundle/core/table/Account';
import AccountSettingQuery from 'bundle/core/table/AccountSetting';
import CountryQuery from 'bundle/core/table/Country';
import db from '@apecommerce/ape-framework/db';
import LanguageQuery from 'bundle/core/table/Language';
import pwd from '@apecommerce/ape-framework/pwd';

const help = formatText([
  'Usage:',
  formatTable([
    ['admin list', 'List admin accounts.'],
    ['admin create <email> <password> <languageId> <countryId>', 'Create admin account.'],
  ]),
]);

const list = async () => {
  const accounts = await AccountQuery()
    .join(Account_RoleTable, `${Account_RoleTable}.accountId`, `${AccountTable}.accountId`)
    .where(`${Account_RoleTable}.roleId`, RoleId.admin)
    .select(`${AccountTable}.email`);
  if (accounts.length) {
    writeLn(formatText([
      'Admin accounts:',
      formatList(accounts.map((account) => account.email)),
    ]));
  } else {
    writeLn('No admin account.');
  }
};

const create = async (email: string, password: string, languageId: string, countryId: string) => {
  if (!email) { throw new Error('Admin: email not provided'); }
  if (!password) { throw new Error('Admin: password not provided'); }
  if (!languageId) { throw new Error('Admin: language id not provided'); }
  if (!countryId) { throw new Error('Admin: country id not provided'); }

  const language = await LanguageQuery().where({ languageId }).first();
  if (!language || !language.isEnabled) { throw new Error(`Admin: incorrect language id "${languageId}"`); }

  const country = await CountryQuery().where({ countryId }).first();
  if (!country || !country.isEnabled) { throw new Error(`Admin: incorrect country id "${countryId}"`); }

  const account = await AccountQuery().where({ email }).first();
  if (account) {
    writeLn('Admin: skipped account creation.');
  } else {
    const accountId = uuid();
    await db.transaction(async (transaction) => {
      await AccountQuery(transaction).insert({
        accountId,
        email,
        passwordHash: await pwd.hashPassword(password),
        isValidated: true,
        isEnabled: true,
        creationTs: timestamp(),
        authenticationTs: null,
        validationWindow: 0,
        validationCount: 0,
        passwordAttemptWindow: 0,
        passwordAttemptCount: 0,
        passwordResetWindow: 0,
        passwordResetCount: 0,
        passwordlessAuthWindow: 0,
        passwordlessAuthCount: 0,
      });

      await AccountSettingQuery(transaction).insert({
        accountId,
        languageId: language.languageId,
        countryId: country.countryId,
      });

      await Account_RoleQuery(transaction).insert([
        { accountId, roleId: RoleId.admin },
        { accountId, roleId: RoleId.user },
      ]);
    });
    writeLn('Admin: account created.');
  }
};

const command: Command = {
  arg: 'admin',
  handler: async (args) => {
    const action = parseString(args[0]);
    if (!action || action === 'help') { writeLn(help); exit(); }

    const email = parseString(args[1]);
    const password = parseString(args[2]);
    const languageId = parseString(args[3]);
    const countryId = parseString(args[4]);

    switch (action) {
      case 'list':
        await list();
        break;
      case 'create':
        await create(email, password, languageId, countryId);
        break;
      default:
        throw new Error(`Admin: invalid action "${action}"`);
    }

    db.destroy();
  },
};

export default command;
