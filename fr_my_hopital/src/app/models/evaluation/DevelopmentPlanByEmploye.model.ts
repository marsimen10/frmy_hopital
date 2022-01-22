import {User} from '../administration/User.model';
import {DevelopmentPlan} from './DevelopmentPlan.model';

export class DevelopmentPlanByEmploye {

  employe: User;
  employeDevelopmentPlans: DevelopmentPlan[] = [];
  constructor() {
    }
}
