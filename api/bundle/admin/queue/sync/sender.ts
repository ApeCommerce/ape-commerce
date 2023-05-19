import mq from '@apecommerce/ape-framework/mq';
import sync from 'bundle/admin/queue/sync';

export default mq.createSender(sync);
