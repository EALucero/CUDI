import { Request, Response } from 'express'
import { prisma } from '../lib/prisma'

export const StudentController = {
  async getAll(req: Request, res: Response) {
    const students = await prisma.student.findMany()
    res.json(students)
  },

  async getById(req: Request, res: Response) {
    const { id } = req.params
    const student = await prisma.student.findUnique({ where: { id } })
    if (!student) return res.status(404).json({ error: 'Estudiante no encontrado' })
    res.json(student)
  },

  async create(req: Request, res: Response) {
    const { name, email, birthDate, institutionId, isActive } = req.body
    if (!name || !email || !birthDate || !institutionId) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' })
    }

    const student = await prisma.student.create({
      data: { name, email, birthDate: new Date(birthDate), institutionId, isActive },
    })

    res.status(201).json(student)
  },

  async update(req: Request, res: Response) {
    const { id } = req.params
    const { name, email, birthDate, institutionId, isActive } = req.body

    try {
      const student = await prisma.student.update({
        where: { id },
        data: { name, email, birthDate: new Date(birthDate), institutionId, isActive },
      })
      res.json(student)
    } catch {
      res.status(404).json({ error: 'Estudiante no encontrado' })
    }
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params
    try {
      await prisma.student.delete({ where: { id } })
      res.status(204).send()
    } catch {
      res.status(404).json({ error: 'Estudiante no encontrado' })
    }
  },
}