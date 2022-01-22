import {User} from '../administration/User.model';

export class UserPosition {
  createdAt: null;
  updatedAt: null;
  userPositionId: number;
  user: User;
  position: Position;
  startDate: Date;
  endDate: Date;

  constructor() {

  }
}


