import {SkillLevel} from './SkillLevel.model';
import {Skill} from './Skill.model';
import {Company} from './../organisation/Company.model';

export class SkillsGroup {
  createdAt: Date;
  updatedAt: Date;
  skillsGroupId: number;
  skillsGroupLabel: string;
  skillsGroupCode: string;
  skillsGroupDetails: string;
  skillList: Skill[];
  skillGroupLevels: SkillLevel[] = [];
  company: Company;

  constructor() {
  }
}
