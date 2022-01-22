import {RatingScale} from './RatingScale.model';
import {Company} from './Company.model';

export class EvaluationCriteria {
  updatedAt: Date;
  createdAt: Date;
  evaluationCriteriaId: number;

  evaluationCriteriaLabel: string;

  evaluationCriteriaCode: string;
  evaluationCriteriaPondering: number;
  ratingScales: RatingScale[];
  company: Company;
  constructor() {
    this.evaluationCriteriaId = null;

    this.evaluationCriteriaLabel = '';

    this.evaluationCriteriaCode = '';
    this.evaluationCriteriaPondering = 0;
    this.ratingScales = [];
    this.company = null;
  }
}
