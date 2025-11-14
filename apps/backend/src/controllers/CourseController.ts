import { Request, Response } from 'express'
import { dispatchUseCase } from '../../core/dispatchUseCase'
import { CreateCourseDTO } from '../dtos/CreateCourseDTO'
import { UpdateCourseDTO } from '../dtos/UpdateCourseDTO'

export const CourseController = {
  async getAll(req: Request, res: Response) {
    const courses = await dispatchUseCase('course.getAll', undefined)
    res.json(courses)
  },

  async getById(req: Request, res: Response) {
    const { id } = req.params
    const course = await dispatchUseCase('course.getById', id)
    if (!course) return res.status(404).json({ error: 'Curso no encontrado' })
    res.json(course)
  },

  async create(req: Request, res: Response) {
    try {
      const dto = CreateCourseDTO.parse(req.body)
      const course = await dispatchUseCase('course.create', dto)
      res.status(201).json(course)
    } catch (err: any) {
      res.status(400).json({ error: err.message })
    }
  },

  async update(req: Request, res: Response) {
    try {
      const dto = UpdateCourseDTO.parse({ id: req.params.id, ...req.body })
      const course = await dispatchUseCase('course.update', dto)
      res.json(course)
    } catch (err: any) {
      res.status(404).json({ error: err.message })
    }
  },

  async delete(req: Request, res: Response) {
    try {
      await dispatchUseCase('course.delete', { id: req.params.id })
      res.status(204).send()
    } catch (err: any) {
      res.status(404).json({ error: err.message })
    }
  },
}