import { Company } from './Company.model';
import {JobEvaluationCriteria} from './JobEvaluationCriteria.model';

export class Job {
  updatedAt: Date;
  createdAt: Date;
  jobId: number;

  jobLabel: string;

  jobCode: string;
  jobWeight: number;
  evaluationCriteriaList: JobEvaluationCriteria[] = [];
  company:Company;
  constructor() {

  }
}
