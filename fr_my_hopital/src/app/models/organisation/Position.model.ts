import {Attribution} from './Attribution.model';
import {Company} from './Company.model';
import {Job} from './Job.model';
import {BusinessUnit} from './BusinessUnit.model';

export class Position {

  createdAt: Date;
  updatedAt: Date;
  positionId: number;
  positionCode: string;
  positionLabel: string;

  hierarchicalManagerPosition: Position;
  functionalManagerPosition: Position;

  positionWeight: number;
  businessUnit: BusinessUnit;
  company: Company;
  attributions: Attribution [];
  mission: string;
  job: Job;
  positionStartDate: any;
  positionEndDate: any;
  formation: string;
  experience: string;

  constructor() {
    this.positionId = null;
    this.positionCode = null;
    this.positionLabel = '';
    this.hierarchicalManagerPosition = null;
    this.functionalManagerPosition = null;
    // this.functionalRoles= [];
    this.positionWeight = null;
    this.businessUnit = null;
    this.company = null;
    // this.attributions= null;
    // this.evaluationCriteriaList= [];
    // this.positionCategory= null;
    // this.missions= [];
    // this.attributions=[];
    this.job = null;
    this.positionStartDate = new Date();
    this.positionEndDate = new Date();
  }


}
