import { prisma } from '../lib/prisma'
import { Enrollment } from '@domain/entities/Enrollment'
import { EnrollmentRepository } from '@domain/repositories/EnrollmentRepository'

export class PrismaEnrollmentRepository implements EnrollmentRepository {
  async create(enrollment: Enrollment): Promise<Enrollment> {
    const result = await prisma.enrollment.create({
      data: {
        id: enrollment.id,
        studentId: enrollment.studentId,
        courseId: enrollment.courseId,
        enrolledAt: enrollment.enrolledAt,
        status: enrollment.status,
      },
    })

    return new Enrollment(
      result.id,
      result.studentId,
      result.courseId,
      result.enrolledAt,
      result.status
    )
  }
}