import {User} from "../administration/User.model";

export class EvaluationValidation {
    evaluationValidationId: number;
    employe: User;
    position: Position;
    rh: User;
    validator: User;
    evaluator: User;

 constructor() {
     this.employe = null;
     this.rh = null;
     this.validator = null;
     this.position = null;
     this.evaluator = null;
 }
}
