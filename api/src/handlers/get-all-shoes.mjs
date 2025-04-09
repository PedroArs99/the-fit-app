import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";
import { buildHttpResponse } from "../utils/response.mjs";

const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);

const tableName = process.env.SHOES_TABLE;

export const handler = async (event) => {
  var params = {
    TableName: tableName,
    IndexName: "CurrentKmIndex",
  };

  const data = await ddbDocClient.send(new ScanCommand(params));
  var items = data.Items;

  const response = buildHttpResponse(200, items);

  console.info(
    `response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`
  );
  return response;
};
