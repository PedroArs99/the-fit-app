import mongoose from "mongoose";
const { Schema } = mongoose;

export const mealSchema = new Schema({
  _id: String,
  imageUrl: String,
  name: String,
});
