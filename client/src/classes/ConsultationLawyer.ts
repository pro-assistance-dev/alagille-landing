// import ClassHelper from '@/services/ClassHelper';

export default class ConsultationLawyer {
  id?: string;
  patientId?: string;
  theme = '';
  themeDate: Date = new Date();

  constructor(i?: ConsultationLawyer) {
    ClassHelper.BuildClass(this, i);
  }

  static Create(patientId?: string): ConsultationLawyer {
    const item = new ConsultationLawyer();
    item.patientId = patientId;
    return item;
  }
}
