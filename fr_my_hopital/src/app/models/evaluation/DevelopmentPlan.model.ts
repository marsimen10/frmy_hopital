import {User} from '../administration/User.model';
import {Company} from '../organisation/Company.model';
import {BusinessUnit} from '../organisation/BusinessUnit.model';
import {Position} from '../organisation/Position.model';
import {SubSkill} from '../skills/SubSkill.model';
import {SkillLevel} from '../skills/SkillLevel.model';
import {TrainingTheme} from './TrainingTheme.model';
import {TrainingObjective} from './TrainingObjective.model';

export class DevelopmentPlan {

  developmentPlanId: number;
  employe: User;
  company: Company;
  businesUnit: BusinessUnit;
  position: Position;
  subSkill: SubSkill;
  requiredLevel: SkillLevel ;
  reachedLevel: SkillLevel;
  gap: number;
  evaluationForm: any;
  developmentMode: DevelopmentMode;
  trainingTheme: TrainingTheme;
  trainingObjective: TrainingObjective;

  constructor() {
    }
}
