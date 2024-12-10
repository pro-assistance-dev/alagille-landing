import Anket from '@/classes/Anket';
import User from '@/classes/User';
import FormFill from '@/modules/forms/classes/FormFill';

export default class AnketUser {
  id?: string;
  @ClassHelper.GetClassConstructor(Anket)
  anket: Anket = new Anket();
  anketId?: string;

  @ClassHelper.GetClassConstructor(FormFill)
  formFill: FormFill = new FormFill();
  formFillId?: string;

  userId?: string;

  @ClassHelper.GetClassConstructor(User)
  user?: User;

  createdAt: Date = new Date();
  order = 0;
  finished = false;
  paid = false;
  finishedAt?: Date;

  constructor(i?: AnketUser) {
    ClassHelper.BuildClass(this, i);
  }

  static Create(userId?: string, anketId?: string): AnketUser {
    const item = new AnketUser();
    item.userId = userId;
    item.anketId = anketId;
    return item;
  }
}
