import { BaseStore } from 'sprof';

import Therapy from '@/classes/Therapy';

class S extends BaseStore<Therapy> {
  constructor() {
    super(Therapy, 'therapies');
  }
}

const store: S = new S();
export default store;
