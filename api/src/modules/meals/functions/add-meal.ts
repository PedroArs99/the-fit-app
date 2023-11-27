import { ApiGatewayEvent } from "src/shared/api-gateway-event";
import { jsonResponse } from "src/shared/json-reponse";
import { validationSchema } from "../models/write/add-meal";
import { MealsRepository } from "../database/meals.repository";
import { v4 as uuidv4 } from "uuid";

module.exports.handler = async (event: ApiGatewayEvent) => {
  const input = JSON.parse(event.body); 

  const { error } = validationSchema.validate(input);

  if (error) return jsonResponse(400, error.details[0].message);

  const mealId = uuidv4();
  MealsRepository.addMeal(mealId, input)

  return jsonResponse(200, {
    mealId,
    ...input,
  });
};
