import { Transaction } from '@apecommerce/ape-framework/db/transaction';
import db from '@apecommerce/ape-framework/db';

export const AccountTable = 'Account';

export interface Account {
  accountId: string,
  email: string,
  passwordHash: string,
  isValidated: boolean,
  isEnabled: boolean,
  creationTs: number,
  authenticationTs: number | null,
  validationWindow: number,
  validationCount: number,
  passwordAttemptWindow: number,
  passwordAttemptCount: number,
  passwordResetWindow: number,
  passwordResetCount: number,
  passwordlessAuthWindow: number,
  passwordlessAuthCount: number,
}

export default (
  t?: Transaction,
) => (t || db)<Account>(AccountTable);
