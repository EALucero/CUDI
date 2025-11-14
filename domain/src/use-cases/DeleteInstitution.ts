import { InstitutionRepository } from '../repositories/InstitutionRepository'
import { UseCase } from '../types/UseCase'

type Payload = {
  id: string
}

export class DeleteInstitution implements UseCase<Payload, void, { institutionRepo: InstitutionRepository }> {
  deps!: { institutionRepo: InstitutionRepository }

  async execute({ id }: Payload): Promise<void> {
    await this.deps.institutionRepo.delete(id)
  }
}