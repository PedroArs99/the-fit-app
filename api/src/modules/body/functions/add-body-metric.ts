import { ApiGatewayEvent } from "src/shared/api-gateway-event";
import { jsonResponse } from "src/shared/json-reponse";
import { v4 as uuidv4 } from "uuid";
import { validationSchema } from "../models/write/add-body-metric";
import { BodyMetricsRepository } from "../database/body-metric.repository";

module.exports.handler = async (event: ApiGatewayEvent) => {
  const input = JSON.parse(event.body); 

  const { error } = validationSchema.validate(input);

  if (error) return jsonResponse(400, error.details[0].message);

  const id = uuidv4();
  await BodyMetricsRepository.add(id, input)

  return jsonResponse(201, {
    ...input,
  });
};
