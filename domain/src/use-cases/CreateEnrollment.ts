import { EnrollmentRepository } from '../repositories/EnrollmentRepository'
import { Enrollment } from '../entities/Enrollment'
import { UseCase } from '../types/UseCase'
import { randomUUID } from 'crypto'

type Payload = {
  studentId: string
  courseId: string
}

export class CreateEnrollment implements UseCase<Payload, Enrollment, { enrollmentRepo: EnrollmentRepository }> {
  deps!: { enrollmentRepo: EnrollmentRepository }

  async execute(data: Payload): Promise<Enrollment> {
    const enrollment = new Enrollment(
      randomUUID(),
      data.studentId,
      data.courseId,
      new Date(),
      'active'
    )

    return await this.deps.enrollmentRepo.create(enrollment)
  }
}