import {DevelopmentPlan} from './DevelopmentPlan.model';
import {SkillsGroup} from '../skills/SkillsGroup.model';
import {DevelopmentPlanBySkill} from './DevelopmentPlanBySkill.model';

export class DevelopmentPlanBySkillGroup {

  skillsGroup: SkillsGroup;
  developmentPlanBySkills: DevelopmentPlanBySkill[] = [];
  constructor() {
    }
}
