import { StudentRepository } from '../repositories/StudentRepository'
import { UseCase } from '../types/UseCase'

type Payload = {
  id: string
}

export class DeleteStudent implements UseCase<Payload, void, { studentRepo: StudentRepository }> {
  deps!: { studentRepo: StudentRepository }

  async execute({ id }: Payload): Promise<void> {
    await this.deps.studentRepo.delete(id)
  }
}