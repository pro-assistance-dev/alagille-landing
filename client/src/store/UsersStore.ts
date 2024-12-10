import { BaseStore } from 'sprof';

import User from '@/classes/User';

class S extends BaseStore<User> {
  constructor() {
    super(User, 'users');
  }
}

const store: S = new S();
export default store;
