import {Position} from './Position.model';
import {BusinessUnit} from './BusinessUnit.model';

export class Company {
  updatedAt: Date;
  createdAt: Date;
  companyId: number;

  companyLabel: string;

  companyEmail: string;
  companyAddress: string;

  companyPhoneNumber: string;

  companyManagerName: string;

  companyLogoUrl: string;
  companyUniqueIdentifier: string;

  companyCountry: string;
  companyCity: string;
  companyDescription: string;
  positionList: Position [];
  businessUnitList: BusinessUnit [];

  constructor() {
  }
}
