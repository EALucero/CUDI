import { Request, Response } from 'express'
import { dispatchUseCase } from '../usecases/dispatcher'

export const UseCaseController = {
  async handle(req: Request, res: Response) {
    const { name, payload } = req.body
    try {
      const result = await dispatchUseCase(name, payload)
      res.json(result)
    } catch (err: any) {
      res.status(400).json({ error: err.message })
    }
  },
}