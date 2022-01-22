export class PlanSuccession {
    planSuccessionId: number;
    planSuccessionLabel: string;
    planSuccessionCode: string;
    planSuccessionValueMin: number;
    planSuccessionValueMax: number;
    planSuccessionColor: string;
    companyId: number;
 constructor() {
     this.planSuccessionId = null;
     this.companyId = null;
     this.planSuccessionCode = '';
     this.planSuccessionLabel = '';
     this.planSuccessionColor = '';
     this.planSuccessionValueMin = 0;
     this.planSuccessionValueMax = 0;
 }
}
