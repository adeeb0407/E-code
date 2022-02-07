import express from "express";
import {
  getAllEnrolment
  } from '../controller/enrolment.js'

const router = express.Router();

router.get('/', getAllEnrolment);

export default router;