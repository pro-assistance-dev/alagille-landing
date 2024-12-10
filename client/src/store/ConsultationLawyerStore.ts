import { BaseStore } from 'sprof';

import ConsultationLawyer from '@/classes/ConsultationLawyer';

class S extends BaseStore<ConsultationLawyer> {
  constructor() {
    super(ConsultationLawyer, 'consultations-lawyer');
  }
}

const store: S = new S();
export default store;
