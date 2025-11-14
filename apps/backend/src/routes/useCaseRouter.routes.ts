import { Router } from 'express'
import { UseCaseController } from '../controllers/UseCaseController'

const router = Router()
router.post('/', UseCaseController.handle)
export default router