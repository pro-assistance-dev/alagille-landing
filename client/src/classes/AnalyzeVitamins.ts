import { ClassHelper } from 'sprof';

export default class AnalyzeVitamins {
  id?: string;

  patientId?: string;

  d25oh = '';
  a = '';
  e = '';
  k1 = '';

  resultDate: Date = new Date();

  constructor(i?: AnalyzeVitamins) {
    ClassHelper.BuildClass(this, i);
  }

  static Create(patientId?: string): AnalyzeVitamins {
    const item = new AnalyzeVitamins();
    item.patientId = patientId;
    return item;
  }
}
