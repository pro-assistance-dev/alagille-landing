// import ClassHelper from '@/services/ClassHelper';

export default class Therapy {
  id?: string;

  patientId?: string;

  preparation = '';
  dosage = '';
  weight = 0;
  remain = 0;
  appointmentDate: Date = new Date();
  cancellationDate: Date = new Date();

  constructor(i?: Therapy) {
    ClassHelper.BuildClass(this, i);
  }

  static Create(patientId?: string): Therapy {
    const item = new Therapy();
    item.patientId = patientId;
    return item;
  }
}
