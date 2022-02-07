import express from "express";
import {
  createCourse,
   getAllStudents,
   studentLogin
  } from '../controller/student.js'

const router = express.Router();

router.post('/', createCourse);
router.post('/login', studentLogin);
router.get('/', getAllStudents);

export default router;