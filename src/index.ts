import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import { connectDB } from './database/mongodb'
import { initRoutes } from './config/routes'
const app = express()

dotenv.config()
connectDB()
initRoutes(app)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.listen(process.env.BACKEND_PORT, () => console.log(`Backend sendo executado na porta ${process.env.BACKEND_PORT}`))