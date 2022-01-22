import {Position} from './Position.model';

export class Attribution {
  updatedAt: Date;
  createdAt: Date;
  attributionId: number;

  attributionLabel: string;

  attributionCode: string;

  position: Position;

  constructor() {
    this.attributionId = null;
    this.attributionLabel = null;
    this.attributionCode = null;
  }
}
