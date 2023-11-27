import { jsonResponse } from "src/shared/json-reponse";
import { MealsRepository } from "../database/meals.repository";

module.exports.handler = async () => {
  const meals = await MealsRepository.findAll()

  return jsonResponse(200, meals);
};
