import { jsonResponse } from "src/shared/json-reponse";
import { TrainingPlanRepository } from "../database/trainingPlans.repository";

module.exports.handler = async () => {
  const trainingPlans = await TrainingPlanRepository.findAll();

  return jsonResponse(200, trainingPlans);
};
