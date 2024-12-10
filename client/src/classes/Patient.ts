import Representative from '@//classes/Representative';
import AnalyzeAcids from '@/classes/AnalyzeAcids';
import AnalyzeVitamins from '@/classes/AnalyzeVitamins';
import ChartData from '@/classes/ChartData';
import ChartDataSet from '@/classes/ChartDataSet';
import Therapy from '@/classes/Therapy';

// import FileInfo from '@/services/classes/FileInfo';
// import Human from '@/services/classes/Human';
// import DateTimeFormatter from '@/services/DatesFormatter';
import AdverseEvent from './AdverseEvent';
import Application from './Application';
import ConsultationLawyer from './ConsultationLawyer';
import ConsultationPsychologist from './ConsultationPsychologist';

export default class Patient {
  id?: string;

  @ClassHelper.GetClassConstructor(Human)
  human: Human = new Human();
  humanId?: string;

  @ClassHelper.GetClassConstructor(Representative)
  representative: Representative = new Representative();
  representativeId?: string;

  @ClassHelper.GetClassConstructor(FileInfo)
  agreeScan: FileInfo = new FileInfo();
  agreeScanId?: string;

  email = '';
  phone = '';

  inn = '';
  snils = '';
  passportNum = '';
  passportSeria = '';
  passportDivision = '';
  passportDivisionCode = '';
  passportCitzenship = '';

  disease = false;
  diseaseInfo = '';
  status = '';
  region = '';

  @ClassHelper.GetClassConstructor(AnalyzeAcids)
  analyzesAcids: AnalyzeAcids[] = [];

  @ClassHelper.GetClassConstructor(AnalyzeVitamins)
  analyzesVitamins: AnalyzeVitamins[] = [];

  @ClassHelper.GetClassConstructor(Therapy)
  therapies: Therapy[] = [];

  @ClassHelper.GetClassConstructor(AdverseEvent)
  adverseEvents: AdverseEvent[] = [];

  @ClassHelper.GetClassConstructor(Application)
  applications: Application[] = [];

  @ClassHelper.GetClassConstructor(ConsultationLawyer)
  consultationsLawyer: ConsultationLawyer[] = [];

  @ClassHelper.GetClassConstructor(ConsultationPsychologist)
  consultationsPsychologist: ConsultationPsychologist[] = [];

  constructor(i?: Patient) {
    ClassHelper.BuildClass(this, i);
  }

  static Create(): Patient {
    const item = new Patient();
    item.id = ClassHelper.CreateUUID();
    item.human.id = ClassHelper.CreateUUID();
    item.humanId = item.human.id;
    item.representative.id = ClassHelper.CreateUUID();
    item.representativeId = item.representative.id;
    item.representative.human.id = ClassHelper.CreateUUID();
    item.representative.humanId = item.representative.human.id;
    return item;
  }
  addAnalyzeAcids(item: AnalyzeAcids) {
    this.analyzesAcids.push(item);
  }
  addAnalyzeVitamins(item: AnalyzeVitamins) {
    this.analyzesVitamins.push(item);
  }
  addTherapy(item: Therapy) {
    this.therapies.push(item);
  }

  addAdverseEvent(item: AdverseEvent) {
    this.adverseEvents.push(item);
  }
  addApplication(item: Application) {
    this.applications.push(item);
  }
  addConsultationLawyer(item: ConsultationLawyer) {
    this.consultationsLawyer.push(item);
  }
  addConsultationPsychologist(item: ConsultationPsychologist) {
    this.consultationsPsychologist.push(item);
  }

  getChartDataAnalyzesAcids(): ChartData {
    const data = new ChartData();
    data.labels = this.analyzesAcids.map((rr: AnalyzeAcids) => DateTimeFormatter.Format(rr.resultDate));

    const dataSet = new ChartDataSet();
    // this.analyzesAcids.forEach((f: AnalyzeAcids) => {
    dataSet.label = 'Результат';
    dataSet.backgroundColor = 'red';
    this.analyzesAcids.forEach((rr: AnalyzeAcids) => {
      dataSet.results.push(rr.result);
      dataSet.data.push(Number(rr.result));
    });
    data.datasets.push(dataSet);
    return data;
  }

  getChartDataAnalyzesVitamins(): ChartData {
    const data = new ChartData();
    data.labels = this.analyzesVitamins.map((rr: AnalyzeVitamins) => DateTimeFormatter.Format(rr.resultDate));

    const aDataSet = new ChartDataSet();
    aDataSet.label = 'Витамин А';
    aDataSet.backgroundColor = 'red';

    const eDataSet = new ChartDataSet();
    eDataSet.label = 'Витамин E';
    eDataSet.backgroundColor = 'green';

    const k1DataSet = new ChartDataSet();
    k1DataSet.label = 'K1';
    k1DataSet.backgroundColor = 'blue';

    const d25DataSet = new ChartDataSet();
    d25DataSet.label = 'D25OH';
    d25DataSet.backgroundColor = 'orange';

    this.analyzesVitamins.forEach((f: AnalyzeVitamins) => {
      aDataSet.data.push(Number(f.a));
      eDataSet.data.push(Number(f.e));
      k1DataSet.data.push(Number(f.k1));
      d25DataSet.data.push(Number(f.d25oh));
    });
    data.datasets.push(aDataSet, eDataSet, k1DataSet, d25DataSet);
    return data;
  }
}
