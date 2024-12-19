import { FileInfo } from 'sprof';

export default class Patient {
  id?: string;
  email = '';
  name = '';
  surname = '';
  patronymic = '';
  isMale = true;
  dateBirth = new Date();
  phone = '';
  fioRepresentative = '';
  howDoYouKnow = '';
  editNameMode = false;
  isRussian = false;
  region = '';
  city = '';
  diagnosis = '';
  drug = '';
  illHistory: FileInfo = new FileInfo();
  accept: FileInfo = new FileInfo();

  constructor(i?: Patient) {
    ClassHelper.BuildClass(this, i);
  }

  static Create(): Patient {
    const item = new Patient();
    item.id = ClassHelper.CreateUUID();
    return item;
  }
}
