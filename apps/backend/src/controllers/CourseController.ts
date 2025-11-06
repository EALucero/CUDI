import { Request, Response } from 'express'
import { prisma } from '../lib/prisma'

export const CourseController = {
  async getAll(req: Request, res: Response) {
    const courses = await prisma.course.findMany()
    res.json(courses)
  },

  async getById(req: Request, res: Response) {
    const { id } = req.params
    const course = await prisma.course.findUnique({ where: { id } })
    if (!course) return res.status(404).json({ error: 'Curso no encontrado' })
    res.json(course)
  },

  async create(req: Request, res: Response) {
    const { name, description, institutionId, teacherId, isActive } = req.body
    if (!name || !institutionId || !teacherId) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' })
    }

    const course = await prisma.course.create({
      data: { name, description, institutionId, teacherId, isActive },
    })

    res.status(201).json(course)
  },

  async update(req: Request, res: Response) {
    const { id } = req.params
    const { name, description, institutionId, teacherId, isActive } = req.body

    try {
      const course = await prisma.course.update({
        where: { id },
        data: { name, description, institutionId, teacherId, isActive },
      })
      res.json(course)
    } catch (error) {
      res.status(404).json({ error: 'Curso no encontrado' })
    }
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params
    try {
      await prisma.course.delete({ where: { id } })
      res.status(204).send()
    } catch (error) {
      res.status(404).json({ error: 'Curso no encontrado' })
    }
  },
}