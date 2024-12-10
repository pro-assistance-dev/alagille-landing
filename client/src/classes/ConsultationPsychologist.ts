// import ClassHelper from '@/services/ClassHelper';

export default class ConsultationPsychologist {
  id?: string;
  patientId?: string;
  theme = '';
  themeDate: Date = new Date();

  constructor(i?: ConsultationPsychologist) {
    ClassHelper.BuildClass(this, i);
  }

  static Create(patientId?: string): ConsultationPsychologist {
    const item = new ConsultationPsychologist();
    item.patientId = patientId;
    return item;
  }
}
