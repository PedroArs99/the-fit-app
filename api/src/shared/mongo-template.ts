import * as mongoose from "mongoose";

const mongoConnectionString = process.env.MONGO_CONNECTION_STRING;

async function runOperation(operation: () => Promise<void>) {
  await mongoose.connect(mongoConnectionString);

  await operation();

  await mongoose.disconnect();
}

export const MongoTemplate = {
  runOperation,
}