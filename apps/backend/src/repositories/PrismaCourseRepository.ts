import { PrismaClient } from '@prisma/client'
import { Course } from '@cudi/domain/src/entities/Course'
import { CourseRepository } from '@cudi/domain/src/repositories/CourseRepository'

const prisma = new PrismaClient()

export class PrismaCourseRepository implements CourseRepository {
  async findByEmail(email: string): Promise<Course | null> {
    const data = await prisma.course.findUnique({ where: { email } })
    return data ? this.toDomain(data) : null
  }

  async findById(id: string): Promise<Course | null> {
    const data = await prisma.course.findUnique({ where: { id } })
    return data ? this.toDomain(data) : null
  }

  async findAll(): Promise<Course[]> {
    const users = await prisma.course.findMany({ where: { isActive: true } })
    return users.map(this.toDomain)
  }

  async save(course: Course): Promise<void> {
    await prisma.course.create({
      data: {
        id: course.id,
        name: course.name,
        description: course.description,
        institutionId: course.institutionId,
        teacherId: course.teacherId,
        isActive: course.isActive,
      }
    })
  }

  async update(course: Course): Promise<void> {
    await prisma.course.update({
      where: { id: course.id },
      data: {
        name: course.name,
        description: course.description,
        institutionId: course.institutionId,
        teacherId: course.teacherId,
        isActive: course.isActive
      }
    })
  }

  async delete(id: string): Promise<void> {
    await prisma.course.update({
      where: { id },
      data: { isActive: false }
    })
  }

  private toDomain(data: any): Course {
    return new Course(
      data.id,
      data.name,
      data.description,
      data.institutionId,
      data.teacherId,
      data.isActive,
    )
  }
}