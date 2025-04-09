import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import { v4 as uuidv4 } from "uuid";
import { buildHttpResponse } from '../utils/response.mjs';

const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);

const tableName = process.env.SHOES_TABLE;

export const handler = async (event) => {
  const id = uuidv4();
  const body = JSON.parse(event.body);

  const entity = {
    ...body,
    id
  }

  var params = {
    TableName: tableName,
    Item: entity,
  };

  await ddbDocClient.send(new PutCommand(params));

  const response = buildHttpResponse(201, entity);

  console.info(
    `response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`
  );
  return response;
};
