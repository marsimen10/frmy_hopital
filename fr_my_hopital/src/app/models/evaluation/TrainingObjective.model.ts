import {TrainingTheme} from './TrainingTheme.model';

export class TrainingObjective {
    trainingObjectiveId: String;
    trainingObjectiveLabel: string;
    trainingTheme: TrainingTheme;
constructor() {
  this.trainingObjectiveId = null;
  this.trainingObjectiveLabel =  null;
  this.trainingTheme = null;
}
}
