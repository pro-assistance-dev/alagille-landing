// import FileInfo from '@/services/classes/FileInfo';
// import Human from '@/services/classes/Human';
// import DateTimeFormatter from '@/services/DatesFormatter';

export default class Patient {
  id?: string;

  @ClassHelper.GetClassConstructor(Human)
  human: Human = new Human();
  humanId?: string;

  // @ClassHelper.GetClassConstructor(FileInfo)
  // agreeScan: FileInfo = new FileInfo();
  // agreeScanId?: string;

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

  constructor(i?: Patient) {
    ClassHelper.BuildClass(this, i);
  }

  static Create(): Patient {
    const item = new Patient();
    item.id = ClassHelper.CreateUUID();
    item.human.id = ClassHelper.CreateUUID();
    item.humanId = item.human.id;
    return item;
  }
}
