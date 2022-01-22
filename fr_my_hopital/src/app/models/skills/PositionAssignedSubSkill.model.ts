import {PositionAssignedGroupSubSkill} from './PositionAssignedGroupSubSkill.model';
import {AssignedSkillsGroup} from './AssignedSkillsGroup.model';

export class PositionAssignedSubSkill {
  skillsGroupLabel: string;
  positionId: number;
  positionLabel: string;
  attributionId: number;
  attributionLabel: string;
  nbSKills: number;
  nbPositionAttribution: number;
  availableSkills: AssignedSkillsGroup[];
  assignedGroups: PositionAssignedGroupSubSkill[];
}
