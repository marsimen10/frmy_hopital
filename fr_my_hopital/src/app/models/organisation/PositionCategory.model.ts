import { Company } from "./Company.model";

export class PositionCategory {
  updatedAt: Date;
  createdAt: Date;
  positionCategoryId: number;

  positionCategoryLabel: string;

  positionCategoryDetails: string;

  minValue: number;
  maxValue: number;
  company:Company
  constructor() {
    this.minValue = 0;
    this.maxValue = 0;
  }

}
