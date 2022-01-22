import {User} from '../administration/User.model';

export class UserProjectRole {
  createdAt: Date;
  updatedAt: Date;
  userProjectRoleId: number;
  projectRoleLabel: string;
  user: User;
  position: Position;
  startDate: Date;
  endDate: Date;
  hierarchicalManagerPosition: Position;

  constructor() {

  }
}


