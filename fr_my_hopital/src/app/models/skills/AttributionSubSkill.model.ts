import {SubSkill} from './SubSkill.model';
import {Attribution} from '../organisation/Attribution.model';
import {Position} from '../organisation/Position.model';
import {SkillLevel} from './SkillLevel.model';
import {AssignedSkillsGroup} from './AssignedSkillsGroup.model';

export class AttributionSubSkill {
  attributionSubSkillId: number;
  attribution: Attribution;
  position: Position[] = [];
  subSkill: SubSkill;
  requiredLevel: SkillLevel;
  evaluated: boolean = false;
  skillsGroup: AssignedSkillsGroup;
  weighting: number;
}
