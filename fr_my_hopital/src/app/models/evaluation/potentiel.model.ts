export class Potentiel {
    potentielId: number;
    potentielLabel: string;
    potentielCode: string;
    potentielValueMin: number;
    potentielValueMax: number;
    potentielColor: string;
    companyId: number;

constructor() {
    this.potentielId = null;
    this.companyId = null;
    this.potentielCode = '';
    this.potentielColor = '';
    this.potentielLabel = '';
    this.potentielValueMax = 0;
    this.potentielValueMin = 0;
}


}
