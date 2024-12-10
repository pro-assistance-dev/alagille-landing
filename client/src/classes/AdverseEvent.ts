// import ClassHelper from '@/services/ClassHelper';

export default class AdverseEvent {
  id?: string;

  patientId?: string;

  eventDescription = '';
  reportedCompany?: boolean;
  reportedPerson = '';
  reportedPath = '';
  reportedDate: Date = new Date();

  createdAt: Date = new Date();

  constructor(i?: AdverseEvent) {
    ClassHelper.BuildClass(this, i);
  }

  static Create(patientId?: string): AdverseEvent {
    const item = new AdverseEvent();
    item.patientId = patientId;
    return item;
  }
}
