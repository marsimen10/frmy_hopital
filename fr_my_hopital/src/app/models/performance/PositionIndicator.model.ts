import { Indicator } from './Indicator.model';

export class PositionIndicator {
  createdAt: Date;
  updatedAt: Date;
  positionIndicatorId: number;
  indicator: Indicator;
  position: Position;
  // targetValue: number;
  // targetLevel: string;
  minValue: number;
  maxValue: number;
  indicatorPonderation: number;

    constructor() {
        this.positionIndicatorId = null;
        this.position = null;
        this.indicator = null ;
        // this.targetValue = 0;
        this.minValue = 0;
        this.maxValue = 0;
    }
}
