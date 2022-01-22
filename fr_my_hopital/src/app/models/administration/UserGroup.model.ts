import {Group} from './Group.model';
import {User} from './User.model';

export class UserGroup {
  createdAt: Date;
  updatedAt: Date;
  userGroupId: number;
  user: User;
  group: Group;
  startDate: Date;
  endDate: Date;

  constructor() {

  }
}


