import express from "express";
import { exerciseRepository } from "./exercises.repository";

const router = express.Router();

// GET all exercises
router.get("/", async (_, res) => {
  const exercises = await exerciseRepository.findAll();

  res.json(exercises);
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
