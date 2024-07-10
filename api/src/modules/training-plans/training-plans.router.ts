import express from "express";
import { trainingPlanRepository } from "./training-plans.repository";

const router = express.Router();

// GET all training-plans
router.get("/", async (_, res) => {
  const trainingPlans = await trainingPlanRepository.findAll();

  res.json(trainingPlans);
});

// GET By Id
router.get("/:id", async (req, res) => {
  const trainingPlanId = parseInt(req.params.id);

  const result = await trainingPlanRepository.findById(trainingPlanId);

  if (!result) res.status(404);

  return res.json(result);
});

// POST a new training-plan
router.post("/", async (req, res) => {
  // TODO: Validate Schemas!
  const payload = req.body;

  const result = await trainingPlanRepository.create(payload);

  res.status(201).json(result);
});

export default router;
