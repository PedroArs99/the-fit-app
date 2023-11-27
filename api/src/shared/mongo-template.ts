import * as mongoose from "mongoose";

const mongoConnectionString = process.env.MONGO_CONNECTION_STRING;

async function runOperation<T>(operation: () => Promise<T>): Promise<T> {
  await mongoose.connect(mongoConnectionString);

  const operationResult = await operation();

  await mongoose.disconnect();

  return operationResult;
}

export const MongoTemplate = {
  runOperation,
}