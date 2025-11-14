import { EnrollmentRepository } from '../repositories/EnrollmentRepository'
import { UseCase } from '../types/UseCase'

type Payload = {
  id: string
}

export class DeleteEnrollment implements UseCase<Payload, void, { enrollmentRepo: EnrollmentRepository }> {
  deps!: { enrollmentRepo: EnrollmentRepository }

  async execute({ id }: Payload): Promise<void> {
    await this.deps.enrollmentRepo.delete(id)
  }
}