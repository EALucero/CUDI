import { Request, Response } from 'express'
import { prisma } from '../lib/prisma'

export const InstitutionController = {
  async getAll(req: Request, res: Response) {
    const institutions = await prisma.institution.findMany()
    res.json(institutions)
  },

  async getById(req: Request, res: Response) {
    const { id } = req.params
    const institution = await prisma.institution.findUnique({ where: { id } })
    if (!institution) return res.status(404).json({ error: 'Institución no encontrada' })
    res.json(institution)
  },

  async create(req: Request, res: Response) {
    const { name, address, email, phone, isActive } = req.body
    if (!name || !address || !email || !phone) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' })
    }

    const institution = await prisma.institution.create({
      data: { name, address, email, phone, isActive },
    })

    res.status(201).json(institution)
  },

  async update(req: Request, res: Response) {
    const { id } = req.params
    const { name, address, email, phone, isActive } = req.body

    try {
      const institution = await prisma.institution.update({
        where: { id },
        data: { name, address, email, phone, isActive },
      })
      res.json(institution)
    } catch {
      res.status(404).json({ error: 'Institución no encontrada' })
    }
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params
    try {
      await prisma.institution.delete({ where: { id } })
      res.status(204).send()
    } catch {
      res.status(404).json({ error: 'Institución no encontrada' })
    }
  },
}