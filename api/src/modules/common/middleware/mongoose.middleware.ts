import { NextFunction } from "express";
import mongoose from "mongoose";

const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

export const mongooseConnect = async (_, __, next: NextFunction) => {
  console.log("Stablishing Mongo Connection...");

  await mongoose.connect(MONGO_CONNECTION_STRING);

  console.log("Mongo Connection Stablished");

  next();
};

export const mongooseDisconnect = async (_, __, next: NextFunction) => {
  console.log("Disconnecting from Mongo");

  await mongoose.disconnect();

  console.log("Mongo Connection closed");

  next();
};
