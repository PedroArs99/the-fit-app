import { ApiGatewayEvent } from "src/shared/api-gateway-event";
import { jsonResponse } from "src/shared/json-reponse";
import { validationSchema } from "../models/write/add-excercise";
import { v4 as uuidv4 } from "uuid";
import { ExcerciseRepository } from "../database/excercises.repository";

module.exports.handler = async (event: ApiGatewayEvent) => {
  const input = JSON.parse(event.body); 

  const { error } = validationSchema.validate(input);

  if (error) return jsonResponse(400, error.details[0].message);

  const id = uuidv4();
  await ExcerciseRepository.add(id, input)

  return jsonResponse(201, {
    id,
    ...input,
  });
}; 
