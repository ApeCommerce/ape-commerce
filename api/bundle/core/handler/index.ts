import { sendReply, Handler } from '@apecommerce/ape-framework/api/handler';
import api from '@apecommerce/ape-framework/api';

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
