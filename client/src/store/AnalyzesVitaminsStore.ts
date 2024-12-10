// import BaseStore from '@/services/BaseStore';
import { BaseStore } from 'sprof';

import AnalyzeVitamins from '@/classes/AnalyzeVitamins';

class S extends BaseStore<AnalyzeVitamins> {
  constructor() {
    super(AnalyzeVitamins, 'analyzes-vitamins');
  }
}

const store: S = new S();
export default store;
