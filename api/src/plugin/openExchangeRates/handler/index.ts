import { sendReply, Handler } from 'framework/api';

const ping: Handler = async (request, reply) => {
  sendReply(reply);
};

export default {
  ping,
};
