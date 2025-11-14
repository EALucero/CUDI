import { prisma } from '../lib/prisma'
import { Student } from '@domain/entities/Student'
import { StudentRepository } from '@domain/repositories/StudentRepository'

export class PrismaStudentRepository implements StudentRepository {
  async create(student: Student): Promise<Student> {
    const result = await prisma.student.create({
      data: {
        id: student.id,
        name: student.name,
        email: student.email,
        birthDate: student.birthDate,
        institutionId: student.institutionId,
        isActive: student.isActive
      }
    })

    return new Student(result.id, result.name, result.email, result.birthDate, result.institutionId, result.isActive)
  }

  async findById(id: string): Promise<Student | null> {
    const result = await prisma.student.findUnique({ where: { id } })
    return result
      ? new Student(result.id, result.name, result.email, result.birthDate, result.institutionId, result.isActive)
      : null
  }

  async findAll(): Promise<Student[]> {
    const results = await prisma.student.findMany()
    return results.map(
      s => new Student(s.id, s.name, s.email, s.institutionId)
    )
  }

  async save(student: Student): Promise<void> {
    await prisma.student.upsert({
      where: { id: student.id },
      update: {
        name: student.name,
        email: student.email,
        institutionId: student.institutionId,
      }
    })
  }

  async update(student: Student): Promise<void> {
    await prisma.student.update({
      where: { id: student.id },
      data: {
        name: student.name,
        email: student.email,
        institutionId: student.institutionId,
      },
    })
  }

  async delete(id: string): Promise<void> {
    await prisma.student.delete({ where: { id } })
  }
}