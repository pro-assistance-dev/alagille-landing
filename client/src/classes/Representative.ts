export default class Representative {
  id?: string;

  @ClassHelper.GetClassConstructor(Human)
  human: Human = new Human();
  humanId?: string;

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

  constructor(i?: Representative) {
    ClassHelper.BuildClass(this, i);
  }

  static Create(): Representative {
    const item = new Representative(this);
    return item;
  }
}
