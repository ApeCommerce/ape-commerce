import { sendReply, Handler } from '@apecommerce/ape-framework/api/handler';

const ping: Handler = async (request, reply) => {
  sendReply(reply);
};

export default {
  ping,
};
