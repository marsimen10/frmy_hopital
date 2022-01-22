import {SubSkill} from './SubSkill.model';
import {BusinessUnit} from '../organisation/BusinessUnit.model';
import {SkillsGroup} from './SkillsGroup.model';

export class BuisnessUnitSubSkill {
  buisnessUnitSkillId: number;
  businessUnit: BusinessUnit;
  subSkill: SubSkill;
  skillsGroup: SkillsGroup;

  constructor() {
  }
}
