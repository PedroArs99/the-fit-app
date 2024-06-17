import serverless from "serverless-http";
import express from "express";

import exercisesRouter from './modules/exercises/exercises.router';
import { mongooseConnect, mongooseDisconnect } from "./modules/common/middleware/mongoose.middleware";
import bodyParser from "body-parser";

import trainingPlanRouter from './modules/training-plans/training-plans.router';

const app = express();

//Parse request body
app.use(bodyParser.json())

// Open Mongo Connection
app.use(mongooseConnect)

// Load Excercises module
app.use("/exercises", exercisesRouter);
app.use("/training-plans", trainingPlanRouter);

app.use(mongooseDisconnect);

// Handle Errors
function errorHandler(error, req, res, next) {
  res.status(error.status || 500);
  res.send({
    error: {
      message: error.message,
    },
  });
}
app.use(errorHandler);

app.use((_, res) => {
  return res.status(404).json({
    error: "Not Found",
  });
});


module.exports.handler = serverless(app);
