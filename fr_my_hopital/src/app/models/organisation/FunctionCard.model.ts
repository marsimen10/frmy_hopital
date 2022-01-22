import {Position} from './Position.model';
import {FunctionCardVersion} from './FunctionCardVersion.model';
import {PositionAssignedGroupSubSkill} from '../skills/PositionAssignedGroupSubSkill.model';
import {Indicator} from '../performance/Indicator.model';

export class FunctionCard {
  updatedAt: Date;
  createdAt: Date;
  functionCardId: number;

  functionCardReference: string;

  functionCardRevisionIndice: string;
  position: Position;

  versions: FunctionCardVersion[] = [];
  subPositionNumber: number;
  assignedSkills: PositionAssignedGroupSubSkill[] = [];
  assignedIndicators: Indicator[] = [];
  constructor() {
  }
}
