import {Company} from '../organisation/Company.model';
import {BusinessUnit} from '../organisation/BusinessUnit.model';

export class User {
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  userRegistrationNumber: string;
  userFirstName: string;
  userLastName: string;
  userPictureUrl: string;
  userBirthDate: Date;
  userBirthCountry: string;
  userBirthCity: string;
  userNRue: string;
  userCity: string;
  userPays: string;
  userHirringDate: Date;
  userAddress: string;
  userEmail: string;
  userPhoneNumber: string;
  userLogin: string;
  userPassword: string;
  isBlocked: boolean;
  userGender: string;
  businessUnit: BusinessUnit;
  company: Company;
  userCivilStatus: string;
  userTypeContract: string;

  constructor() {
  }
}
