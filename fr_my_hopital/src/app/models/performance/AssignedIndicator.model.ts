import { Indicator } from './Indicator.model';

export class AssignedIndicator {
  indicatorAreaLabel: string;
  indicatorAreaId: number;
  availableIndicators: Indicator[];
  assignedSkills: Indicator[];
  buisnessUnitId: number;
  buisnessUnitLabel: string;

  constructor() {
      this.indicatorAreaId = null;
      this.indicatorAreaLabel = null;
      this.availableIndicators = [];
      this.assignedSkills = [];
  }
}
