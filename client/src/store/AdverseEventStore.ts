import { BaseStore } from 'sprof';

import AdverseEvent from '@/classes/AdverseEvent';

class S extends BaseStore<AdverseEvent> {
  constructor() {
    super(AdverseEvent, 'adverse-events');
  }
}

const store: S = new S();
export default store;
