import { Job, Progress } from '@apecommerce/ape-framework/mq/queue';
import { wait } from '@apecommerce/ape-framework/utils';
import log from '@apecommerce/ape-framework/log';

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
