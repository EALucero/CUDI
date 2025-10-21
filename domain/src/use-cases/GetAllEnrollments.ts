import { EnrollmentRepository } from '../repositories/EnrollmentRepository'
import { Enrollment } from '../entities/Enrollment'

export class GetAllEnrollments {
  constructor(private repo: EnrollmentRepository) {}

  async execute(): Promise<Enrollment[]> {
    return await this.repo.findAll()
  }
}