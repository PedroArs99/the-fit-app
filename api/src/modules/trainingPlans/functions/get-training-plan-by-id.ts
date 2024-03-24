import { jsonResponse } from "src/shared/json-reponse";
import { ApiGatewayEvent } from "src/shared/api-gateway-event";
import { TrainingPlanRepository } from "../database/trainingPlans.repository";

module.exports.handler = async (event: ApiGatewayEvent) => {
  const id = event.pathParameters['id'];

  if (!id) return jsonResponse(400, "Bad Request: No Training Plan Id provided");

  const trainingPlan = await TrainingPlanRepository.findById(id);

  if (!trainingPlan) return jsonResponse(404, `Error: Training Plan with id ${id} not found`);

  return jsonResponse(200, trainingPlan);
};
