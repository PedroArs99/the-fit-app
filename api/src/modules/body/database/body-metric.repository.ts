import { AddBodyMetricInput } from "../models/write/add-body-metric";
import { BodyMetricEntity, toDomain } from "./body-metric.entity";
import { MongoTemplate } from "src/shared/mongo-template";

async function add(id: string, addMeal: AddBodyMetricInput) {
  const bodyMetric = new BodyMetricEntity({
    _id: id,
    timestamp: addMeal.timestamp,
    weight: addMeal.weight,
    muscleMassPercentage: addMeal.muscleMassPercentage,
    fatMassPercentage: addMeal.fatMassPercentage,
    boneMassPercentage: addMeal.boneMassPercentage,
  });

  await MongoTemplate.runOperation(async () => {
    await bodyMetric.save();
  });
}

async function findAll() {
  const queryResult = await MongoTemplate.runOperation(async () => {
    return await BodyMetricEntity.find().sort({ timestamp: "ascending" });
  });

  return queryResult.map((entry) => toDomain(entry));
}

export const BodyMetricsRepository = {
  add,
  findAll,
};
