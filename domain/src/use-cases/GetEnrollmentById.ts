import { EnrollmentRepository } from '../repositories/EnrollmentRepository'
import { Enrollment } from '../entities/Enrollment'

export class GetAllEnrollmentById {
  constructor(private repo: EnrollmentRepository) {}

  async execute(id: string): Promise<Enrollment | null> {
    return await this.repo.findById(id)
  }
}