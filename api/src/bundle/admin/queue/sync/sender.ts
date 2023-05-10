import mq from 'framework/mq';
import sync from 'bundle/admin/queue/sync';

export default mq.createSender(sync);
