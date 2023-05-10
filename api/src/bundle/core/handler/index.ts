import api, { sendReply, Handler } from 'framework/api';

const doc: Handler = async (request, reply) => {
  sendReply(reply, api.doc());
};

const ping: Handler = async (request, reply) => {
  sendReply(reply);
};

export default {
  doc,
  ping,
};
