import express from "express"
import {fetch, fetchRestaurantNearMe} from "../controllers/main.js"

const router = express.Router()

router.get('/', fetch)
router.post('/nearme', fetchRestaurantNearMe)
// router.post('/', addData)

export default router