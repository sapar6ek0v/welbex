import express from "express";
import {signUp, signIn, authenticate} from "../controllers/userControllers.js";


const router = express.Router()

router.post('/user/sign_up', signUp )
router.post('/user/sign_in', signIn)
router.get('/user/authenticate', authenticate)

export default router