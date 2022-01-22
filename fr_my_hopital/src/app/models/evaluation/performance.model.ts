export class Performance {
    performanceId: number;
    performanceLabel: string;
    performanceCode: string;
    performanceValueMin: number;
    performanceValueMax: number;
    performanceColor: string;
    companyId: number;


 constructor() {
     this.performanceId = null;
     this.companyId = null;
     this.performanceCode = '';
     this.performanceLabel = '';
     this.performanceColor = '';
     this.performanceValueMin = 0;
     this.performanceValueMax = 0;
 }
}
