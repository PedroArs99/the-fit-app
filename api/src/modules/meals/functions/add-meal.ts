import { ApiGatewayEvent } from "src/shared/ApiGatewayEvent.model";
import { jsonResponse } from "src/shared/json-reponse";
import { validationSchema } from "../models/write/add-meal";

module.exports.handler = async (event: ApiGatewayEvent) => {
  const input = JSON.parse(event.body); 

  const { error } = validationSchema.validate(input);

  if (error) return jsonResponse(400, error.details[0].message);

  return jsonResponse(200, "Hello World!");
};
