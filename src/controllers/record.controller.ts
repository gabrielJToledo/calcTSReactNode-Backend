import { RecordModel } from './../model/record.model';
import { Request, Response, Router } from 'express'

export const recordRouter = Router()

recordRouter.post('/', async (req: Request, res: Response) => {
    const currentResult = { ...req.body }

    const result = eval(currentResult.display)

    currentResult.result = result

    let currentDate = new Date()

    currentResult.date = currentDate.toDateString()

    return res.status(200).send(currentResult)
})