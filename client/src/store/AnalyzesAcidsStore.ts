// import { BaseStore } from 'sprof';

import AnalyzeAcids from '@/classes/AnalyzeAcids';

class S extends BaseStore<AnalyzeAcids> {
  constructor() {
    super(AnalyzeAcids, 'analyzes-acids');
  }
}

const store: S = new S();
export default store;
