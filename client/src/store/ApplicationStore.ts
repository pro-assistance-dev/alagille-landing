import { BaseStore } from 'sprof';

import Application from '@/classes/Application';

class S extends BaseStore<Application> {
  constructor() {
    super(Application, 'applications');
  }
}

const store: S = new S();
export default store;
