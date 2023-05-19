import { Transaction } from '@apecommerce/ape-framework/db/transaction';
import db from '@apecommerce/ape-framework/db';

export const AccountSettingTable = 'AccountSetting';

export interface AccountSetting {
  accountId: string,
  languageId: string,
  countryId: string,
}

export default (
  t?: Transaction,
) => (t || db)<AccountSetting>(AccountSettingTable);
