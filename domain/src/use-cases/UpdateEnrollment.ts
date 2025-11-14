import { EnrollmentRepository } from '../repositories/EnrollmentRepository'
import { Enrollment } from '../entities/Enrollment'
import { UseCase } from '../types/UseCase'

type Payload = {
  id: string
  data: Partial<{
    studentId: string,
    courseId: string,
    enrolledAt: Date,
    status: 'active' | 'withdrawn' | 'completed'
  }>
}

export class UpdateEnrollment implements UseCase<Payload, Enrollment, { enrollmentRepo: EnrollmentRepository }> {
  deps!: { enrollmentRepo: EnrollmentRepository }

  async execute({ id, data }: Payload): Promise<Enrollment> {
    const enrollment = await this.deps.enrollmentRepo.findById(id)
    if (!enrollment) throw new Error('Enrollment not found')

    Object.assign(enrollment, data)
    await this.deps.enrollmentRepo.save(enrollment)
    return enrollment
  }
}