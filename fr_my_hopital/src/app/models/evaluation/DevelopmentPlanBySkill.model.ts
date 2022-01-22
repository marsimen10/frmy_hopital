import {Skill} from '../skills/Skill.model';
import {DevelopmentPlanBySubSkill} from './DevelopmentPlanBySubSkill.model';

export class DevelopmentPlanBySkill {

  skill: Skill;
  developmentPlanBySubSkills: DevelopmentPlanBySubSkill[] = [];
  constructor() {
    }
}
