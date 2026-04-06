import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import { createServer } from 'http'
import { Server } from 'socket.io'

dotenv.config()
const app = express()
const httpServer = createServer(app)

export const io = new Server(httpServer, {
    cors: { origin: 'http://localhost:5173', methods: ['GET', 'POST'] }
})

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Server is running!'))

io.on('connection', socket => {
    console.log('User connected:', socket.id)
    socket.on('disconnect', () => console.log('User disconnected'))
})

httpServer.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})