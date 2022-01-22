import {User} from '../administration/User.model';
import {UserPosition} from './UserPosition.model';

export class GroupedUserPositions {
  createdAt: Date;
  updatedAt: Date;
  user: User;
  userPositions: UserPosition[];

  constructor() {

  }
}


