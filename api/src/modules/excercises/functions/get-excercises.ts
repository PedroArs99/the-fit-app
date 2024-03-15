import { jsonResponse } from "src/shared/json-reponse";
import { ExcerciseRepository } from "../database/excercises.repository";

module.exports.handler = async () => {
  const excercises = await ExcerciseRepository.findAll();
  
  return jsonResponse(200, excercises);
};
