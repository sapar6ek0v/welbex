import express from "express"
import {deleteMessage, editMessage, getMessage, saveMessage} from "../controllers/messageControllers.js";

const router = express.Router()

router.post('/save', saveMessage)
router.get('/get', getMessage)
router.delete('/delete/:id', deleteMessage)
router.put('/edit/:id', editMessage)


export default router