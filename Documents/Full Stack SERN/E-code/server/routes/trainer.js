import express from "express";
import {
    createTrainer,
    getAllTrainer,
    trainerLogin
  } from '../controller/trainer.js'

const router = express.Router();

router.post('/', createTrainer);
router.post('/login', trainerLogin);
router.get('/', getAllTrainer);

export default router;