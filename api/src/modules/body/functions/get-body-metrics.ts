import { jsonResponse } from "src/shared/json-reponse";
import { BodyMetricsRepository } from "../database/body-metric.repository";

module.exports.handler = async () => {
  const metrics = await BodyMetricsRepository.findAll();

  return jsonResponse(200, metrics);
};
