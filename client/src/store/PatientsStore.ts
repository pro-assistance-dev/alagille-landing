import { BaseStore } from 'sprof';

import Patient from '@/classes/Patient';

class S extends BaseStore<Patient> {
  constructor() {
    super(Patient, 'patients');
  }
}

const store: S = new S();
export default store;
