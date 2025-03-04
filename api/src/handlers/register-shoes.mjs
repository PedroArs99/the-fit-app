import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import { v4 as uuidv4 } from "uuid";

const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);

const tableName = process.env.SAMPLE_TABLE;

export const handler = async (event) => {
  const id = uuidv4();
  const body = JSON.parse(event.body);

  var params = {
    TableName: tableName,
    Item: {
      ...body,
      id,
    },
  };

  await ddbDocClient.send(new PutCommand(params));

  const response = {
    statusCode: 201,
    body: JSON.stringify(body),
  };

  // All log statements are written to CloudWatch
  console.info(
    `response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`
  );
  return response;
};
