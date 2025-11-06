import { Router } from 'express'
import { InstitutionController } from '../controllers/InstitutionController'

const router = Router()

router.get('/', InstitutionController.getAll)
router.get('/:id', InstitutionController.getById)
router.post('/', InstitutionController.create)
router.put('/:id', InstitutionController.update)
router.delete('/:id', InstitutionController.delete)

export default router