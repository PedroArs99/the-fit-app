import mongoose from "mongoose";
import { Exercise } from "./exercise.model";
import { CrudRepository } from "../common/interfaces/crud-repository.interface";

const exerciseSchema = new mongoose.Schema<Exercise>({
  id: Number,
  name: String,
  description: String,
  category: String,
  equipment: Array<String>,
  image: String,
  diary: Array<{
    date: Date;
    weight: Number;
    unit: String;
  }>,
});

const ExerciseModel = mongoose.model<Exercise>("Exercise", exerciseSchema);

function _mapToDomain(model: Exercise): Exercise {
  return {
    id: model.id,
    name: model.name,
    description: model.description,
    category: model.category,
    equipment: model.equipment,
    image: model.image,
    diary: model.diary,
  };
}

class ExerciseRepository implements CrudRepository<Exercise> {
  async create(exercise: Exercise): Promise<Exercise> {
    const result = await ExerciseModel.create(exercise);

    return _mapToDomain(result);
  }

  async findAll(): Promise<Exercise[]> {
    const results = await ExerciseModel.find().exec();

    return results.map((it) => _mapToDomain(it));
  }

  async findById(id: number): Promise<Exercise> {
    const results = await ExerciseModel.find({ id }).exec();

    if (results.length !== 1) {
      return undefined;
    }

    return _mapToDomain(results[0]);
  }
}

export const exerciseRepository = new ExerciseRepository();
