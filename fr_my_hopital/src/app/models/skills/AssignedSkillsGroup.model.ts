import {SubSkill} from './SubSkill.model';

export class AssignedSkillsGroup {
  skillsGroupLabel: string;
  skillsGroupId: number;

  skillsGroupCode: string;
  skillsGroupDetails: string;
  subSkills: SubSkill[] = [];

  constructor() {
  }
}
