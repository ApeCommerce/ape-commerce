import { Job, Progress } from 'framework/mq/module';
import { wait } from 'framework/utils';
import log from 'framework/log';

export interface ImportCountriesData {
  hip: string,
  hop: number,
}

const job: Job = {
  jobId: 'importCountries',
  process: async (data: ImportCountriesData, progress: Progress) => {
    log.debug(data);
    progress(1, 3);
    await wait(5000);
    progress(2, 3);
    // throw new Error('Fok !');
    await wait(5000);
    progress(3, 3);
  },
};

export default job;
