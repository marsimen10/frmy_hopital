import {SubSkill} from './SubSkill.model';
import {SkillsGroup} from './SkillsGroup.model';

export class Skill {
  createdAt: Date;
  updatedAt: Date;
  skillId: number;
  skillLabel: string;
  skillCode: string;
  skillDetails: string;
  skillsGroup: SkillsGroup;
  subSkills: SubSkill[];

  constructor() {
    this.subSkills = [];
  }
}
