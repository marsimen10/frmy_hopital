import {IndicatorScale} from './IndicatorScale.model';

export class Indicator {
  createdAt: Date;
  updatedAt: Date;
  indicatorId: number;
  indicatorName: string;
  indicatorSens: string;
  indicatorFormula: string;
  indicatorEvaluation: string;
  indicatorType: string;
  indicatorDetail: string;
  indicatorScales: IndicatorScale[];
  indicatorFrequance: string;

  constructor() {
    this.indicatorId = null;
    this.indicatorName = '';
    this.indicatorSens = '';
    this.indicatorFormula = null;
    this.indicatorEvaluation = null;
    this.indicatorType = null;
    this.indicatorDetail = null;
    this.indicatorScales = [];
  }
}
