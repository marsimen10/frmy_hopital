import { SkillLevel } from './SkillLevel.model';
import {Skill} from './Skill.model';

export class SubSkill {
  createdAt: Date;
  updatedAt: Date;
  subSkillId: number;
  subSkillLabel: string;
  subSkillCode: string;
  subSkillDetails: string;
  skill: Skill;

  constructor() {
    this.subSkillId = null;
    this.subSkillLabel = '';
    this.subSkillCode = '';
    this.subSkillDetails = '';
    this.skill = null;
  }
}
