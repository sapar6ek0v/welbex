import express from "express";
import {get} from "../controllers/controllers.js";


const router = express.Router()

router.get('/', get)

export default router