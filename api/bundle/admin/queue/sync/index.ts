import { Queue } from '@apecommerce/ape-framework/mq/queue';
import importCountriesJob from 'bundle/admin/queue/sync/job/importCountries';

const queue: Queue = {
  queueId: 'sync',
  jobs: [
    importCountriesJob,
  ],
};

export default queue;
