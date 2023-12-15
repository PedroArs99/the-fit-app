import mongoose from "mongoose";
import { BodyMetric } from "../models/read/body-metric";
const { Schema } = mongoose;

export type BodyMetricEntity = {
  _id: string;
  timestamp: Date;
  weight: number;
  muscleMassPercentage: number;
  fatMassPercentage: number;
  boneMassPercentage: number;
};

export const bodyMetricSchema = new Schema<BodyMetricEntity>({
  _id: String,
  timestamp: Date,
  weight: Number,
  muscleMassPercentage: Number,
  fatMassPercentage: Number,
  boneMassPercentage: Number,
});

export const BodyMetricEntity = mongoose.model("BodyMetric", bodyMetricSchema);

export function toDomain(entity: BodyMetricEntity): BodyMetric {
  return {
    timestamp: entity.timestamp,
    weight: entity.weight,
    muscleMassPercentage: entity.muscleMassPercentage,
    fatMassPercentage: entity.fatMassPercentage,
    boneMassPercentage: entity.boneMassPercentage,
  };
}
