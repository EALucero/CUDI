import { EnrollmentRepository } from '../repositories/EnrollmentRepository'
import { Enrollment } from '../entities/Enrollment'
import { UseCase } from '../types/UseCase'

export class GetAllEnrollments implements UseCase<void, Enrollment[], { enrollmentRepo: EnrollmentRepository }> {
  deps!: { enrollmentRepo: EnrollmentRepository }

  async execute(): Promise<Enrollment[]> {
    return await this.deps.enrollmentRepo.findAll()
  }
}