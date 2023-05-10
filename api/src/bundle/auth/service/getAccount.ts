import { GetAccountReply, GetAccountRequest } from 'common/bundle/auth/endpoint/getAccount';
import AccountQuery from 'bundle/core/table/Account';
import auth from 'bundle/auth/lib';

export default async (
  request: GetAccountRequest,
): Promise<GetAccountReply> => {
  const account = await AccountQuery().where({ email: auth.formatEmail(request.email) }).first();

  return {
    isCreated: !!account,
    isValidated: !!account && account.isValidated,
  };
};
