import { jsonResponse } from "src/shared/json-reponse";
import { MealsRepository } from "../database/meals.repository";
import { ApiGatewayEvent } from "src/shared/api-gateway-event";

module.exports.handler = async (event: ApiGatewayEvent) => {
  const id = event.pathParameters['id'];

  if (!id) return jsonResponse(400, "Bad Request: No Meal Id provided");

  const meal = await MealsRepository.findById(id);

  if (!meal) return jsonResponse(404, `Error: Meal with id ${id} not found`);

  return jsonResponse(200, meal);
};
