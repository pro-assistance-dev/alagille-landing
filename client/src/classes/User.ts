// import Human from '@/services/classes/Human';
// import UserAccount from '@/services/classes/UserAccount';
// import ClassHelper from '@/services/ClassHelper';

export default class User {
  id?: string;
  // @ClassHelper.GetClassConstructor(UserAccount)
  // userAccount: UserAccount = new UserAccount();
  userAccountId?: string;

  @ClassHelper.GetClassConstructor(Human)
  human: Human = new Human();
  humanId?: string;

  position = '';
  division = '';
  role = '';
  region = '';

  // docs
  inn = '';
  snils = '';
  passportNum = '';
  passportSeria = '';
  passportDivision = '';
  passportDivisionCode = '';
  passportCitzenship = '';

  constructor(i?: User) {
    ClassHelper.BuildClass(this, i);
  }

  static Create(): User {
    const item = new User();
    item.id = ClassHelper.CreateUUID();
    // item.userAccount = UserAccount.Create();
    // item.userAccountId = item.userAccount.id;
    item.human = new Human();
    item.human.id = ClassHelper.CreateUUID();
    item.humanId = item.human.id;
    return item;
  }

  static GetClassName(): string {
    return 'user';
  }
}
