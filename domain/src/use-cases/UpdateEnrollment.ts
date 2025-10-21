import { EnrollmentRepository } from '../repositories/EnrollmentRepository'
import { Enrollment } from '../entities/Enrollment'

export class UpdateEnrollment {
  constructor(private repo: EnrollmentRepository) {}

  async execute(data: {
    id: string
    status?: 'active' | 'withdrawn' | 'completed'
  }): Promise<Enrollment> {
    const enrollment = await this.repo.findById(data.id)
    if (!enrollment) throw new Error('Enrollment not found')

    enrollment.status = data.status ?? enrollment.status
    await this.repo.update(enrollment)
    return enrollment
  }
}