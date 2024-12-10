// import ClassHelper from '@/services/ClassHelper';

export default class AnalyzeAcids {
  id?: string;

  patientId?: string;

  result = '';

  resultDate: Date = new Date();

  constructor(i?: AnalyzeAcids) {
    ClassHelper.BuildClass(this, i);
  }

  static Create(patientId?: string): AnalyzeAcids {
    const item = new AnalyzeAcids();
    item.patientId = patientId;
    return item;
  }
}
