import { EvaluationCriteria } from './EvaluationCriteria.model';
import { Job } from './Job.model';
export class JobEvaluationCriteria {
  updatedAt: Date;
  createdAt: Date;
  jobEvaluationCriteriaId: number;

  evaluationCriteria: EvaluationCriteria;

  job: Job;

  note: number;

  constructor(evaluationCriteria: EvaluationCriteria,
    note: number) {
        this.evaluationCriteria = evaluationCriteria;
        this.note = note;
    }
}
