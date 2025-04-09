import { DynamoDBClient, QueryCommand } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";
import { buildHttpResponse } from "../utils/response.mjs";

const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);

const tableName = process.env.SHOES_TABLE;

export const handler = async (event) => {
  var params = {
    ExpressionAttributeValues: marshall({
      ":partitionKey": "currentKm",
    }),
    IndexName: "CurrentKmIndex",
    KeyConditionExpression: "gsiPartition = :partitionKey",
    ScanIndexForward: false,
    TableName: tableName,
  };

  const data = await ddbDocClient.send(new QueryCommand(params));
  var items = data.Items.map(it => unmarshall(it));

  const response = buildHttpResponse(200, items);

  console.info(
    `response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`
  );
  return response;
};
