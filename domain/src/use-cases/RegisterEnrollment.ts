import { EnrollmentRepository } from '../repositories/EnrollmentRepository'
import { Enrollment } from '../entities/Enrollment'
import { v4 as uuid } from 'uuid'

export class RegisterEnrollment {
  constructor(private repo: EnrollmentRepository) {}

  async execute(data: {
    studentId: string
    courseId: string
  }): Promise<Enrollment> {
    const enrollment = new Enrollment(
      uuid(),
      data.studentId,
      data.courseId,
      new Date(),
      'active'
    )
    await this.repo.save(enrollment)
    return enrollment
  }
}