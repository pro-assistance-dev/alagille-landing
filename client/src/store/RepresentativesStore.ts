import { BaseStore } from 'sprof';

import Representative from '@/classes/Representative';
class S extends BaseStore<Representative> {
  constructor() {
    super(Representative, 'representatives');
  }
}

const store: S = new S();
export default store;
