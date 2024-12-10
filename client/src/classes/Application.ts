// import FileInfo from '@/services/classes/FileInfo';
// import ClassHelper from '@/services/ClassHelper';

export default class Application {
  id?: string;

  patientId?: string;

  @ClassHelper.GetClassConstructor(FileInfo)
  fkScan: FileInfo = new FileInfo();
  fkScanId?: string;

  quantity = '';

  createdAt: Date = new Date();
  date = new Date();
  start = new Date();
  end = new Date();

  constructor(i?: Application) {
    ClassHelper.BuildClass(this, i);
  }

  static Create(patientId?: string): Application {
    const item = new Application();
    item.patientId = patientId;
    return item;
  }
}
