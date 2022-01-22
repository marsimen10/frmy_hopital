import {User} from '../administration/User.model';

export class Succession {
  successionId: number;
  targetUser: User;
  position: Position;
  sucessor1: User;
  sucessor2: User;
  sucessor3: User;

  constructor() {
     this.targetUser = null;
     this.position = null;
     this.sucessor1 = null;
     this.sucessor2 = null;
     this.sucessor3 = null;
 }
}
