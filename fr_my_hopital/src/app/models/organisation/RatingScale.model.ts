export class RatingScale {
  updatedAt: Date;
  createdAt: Date;
  ratingScaleId: number;

  ratingScaleLabel: string;
  ratingScaleType: string;
  ratingScaleValueMin: number = 0;
  ratingScaleValueMax: number = 0;
  ratingScaleUnity: string;

  constructor() {

  }
}
