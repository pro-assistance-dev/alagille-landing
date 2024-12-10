import ConsultationPsychologist from '@/classes/ConsultationPsychologist';

class S extends BaseStore<ConsultationPsychologist> {
  constructor() {
    super(ConsultationPsychologist, 'consultations-psychologist');
  }
}

const store: S = new S();
export default store;
