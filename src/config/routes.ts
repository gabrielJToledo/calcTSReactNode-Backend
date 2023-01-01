import { json } from "express";
import { recordRouter } from "../controllers/record.controller";
import cors from 'cors'

export function initRoutes(app: any) {
    app.use(json())
    app.use(cors())
    app.use('/api/record', recordRouter)
}