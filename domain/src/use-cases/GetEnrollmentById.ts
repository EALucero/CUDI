import { EnrollmentRepository } from '../repositories/EnrollmentRepository'
import { Enrollment } from '../entities/Enrollment'
import { UseCase } from '../types/UseCase'

export class GetEnrollmentById implements UseCase<string, Enrollment | null, { enrollmentRepo: EnrollmentRepository }> {
  deps!: { enrollmentRepo: EnrollmentRepository }

  async execute(id: string): Promise<Enrollment | null> {
    return await this.deps.enrollmentRepo.findById(id)
  }
}