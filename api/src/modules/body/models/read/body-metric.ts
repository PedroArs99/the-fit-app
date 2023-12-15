export class BodyMetric {
  constructor(
    public timestamp: Date,
    public weight: number,
    public muscleMassPercentage: number,
    public fatMassPercentage: number,
    public boneMassPercentage: number
  ) {}
}
