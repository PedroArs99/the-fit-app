import { BodyMetricEntity, toDomain } from "./body-metric.entity";
import { MongoTemplate } from "src/shared/mongo-template";

async function findAll() {
  const queryResult = await MongoTemplate.runOperation(async () => {
    return await BodyMetricEntity.find().sort({ timestamp: "ascending" });
  });

  return queryResult.map((entry) => toDomain(entry));
}

export const BodyMetricsRepository = {
  findAll,
};
