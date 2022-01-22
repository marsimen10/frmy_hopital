import {UserGroup} from './UserGroup.model';
import {Company} from '../organisation/Company.model';


export class Group {
  updatedAt: Date;
  createdAt: Date;
  groupId: number;
  company: Company;
  groupName: string;

  groupCode: string;
  groupDetails: string;
  userGroupList: UserGroup[];
  nbUser: number;
  constructor() {

  }
}
