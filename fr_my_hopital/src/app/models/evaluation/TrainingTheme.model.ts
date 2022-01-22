import {TrainingObjective} from './TrainingObjective.model';
import {Company} from '../organisation/Company.model';

export class TrainingTheme {
    trainingThemeId: String;
    trainingThemeLabel: string;
    trainingObjectives: TrainingObjective[];
    company: Company;
    createdAt: Date;
    updatedAt: Date;
    createdBy: String;
    updatedBy: String;

 constructor() {
   this.trainingThemeId = null;
   this.trainingThemeLabel =  null;
   this.trainingObjectives = [];
 }
}
