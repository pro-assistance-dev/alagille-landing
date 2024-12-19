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

  constructor(i?: Patient) {
    ClassHelper.BuildClass(this, i);
  }

  static Create(): Patient {
    const item = new Patient();
    item.id = ClassHelper.CreateUUID();
    return item;
  }
}
