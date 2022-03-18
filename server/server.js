import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import path from 'path'

import dbConnect from "./services/mongoose.js";
import userRouter from "./routes/userRoutes.js";
import messageRouter from "./routes/messageRoutes.js";

dotenv.config()

const port = process.env.PORT || 8000
const server = express()

dbConnect()

server.use(cors())
server.use(cookieParser())
server.use(express.json())

server.use('/api', userRouter)
server.use('/api/message', messageRouter)

if (process.env.NODE_ENV === 'production') {
    server.use(express.static('client/build'))
    server.get('*', (req, res) => {
        res.sendFile(path.resolve('client/build/index.html'))
    })
}

server.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})