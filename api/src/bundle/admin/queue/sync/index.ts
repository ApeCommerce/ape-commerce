import { Queue } from 'framework/mq/module';
import importCountriesJob from 'bundle/admin/queue/sync/job/importCountries';

const queue: Queue = {
  queueId: 'sync',
  jobs: [
    importCountriesJob,
  ],
};

export default queue;
