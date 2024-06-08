import express from "express";
import { exerciseRepository } from "./exercises.repository";

const router = express.Router();

// GET all exercises
router.get("/", async (_, res) => {
  const exercises = await exerciseRepository.findAll();

  res.json(exercises);
});

// GET By Id
router.get("/:id", async (req, res) => {
  const exerciseId = parseInt(req.params.id);

  const result = await exerciseRepository.findById(exerciseId);

  if (!result) res.status(404);

  return res.json(result);
});

// POST a new exercise
router.post("/", (req, res) => {
  // TODO: Validate Schemas!
  const payload = req.body;
  console.error(payload);

  const result = exerciseRepository.create(payload);

  res.status(201).json(result);
});

export default router;
