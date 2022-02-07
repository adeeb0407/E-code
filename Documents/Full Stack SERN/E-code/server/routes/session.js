import express from "express";
import {
    createSession,
    getAllSession,
    getSessionByID,
    sessionStoredProcedure
  } from '../controller/session.js'

const router = express.Router();

router.post('/', createSession);
// router.get('/', getAllSession);
router.get('/', sessionStoredProcedure);
router.get('/:id', getSessionByID);

export default router;