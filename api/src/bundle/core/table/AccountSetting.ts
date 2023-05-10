import db, { Transaction } from 'framework/db';

export const AccountSettingTable = 'AccountSetting';

export interface AccountSetting {
  accountId: string,
  languageId: string,
  countryId: string,
}

export default (
  t?: Transaction,
) => (t || db)<AccountSetting>(AccountSettingTable);
