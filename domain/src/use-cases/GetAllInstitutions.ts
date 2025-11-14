import { InstitutionRepository } from '../repositories/InstitutionRepository'
import { Institution } from '../entities/Institution'
import { UseCase } from '../types/UseCase'

export class GetAllInstitutions implements UseCase<void, Institution[], { institutionRepo: InstitutionRepository }> {
  deps!: { institutionRepo: InstitutionRepository }

  async execute(): Promise<Institution[]> {
    return await this.deps.institutionRepo.findAll()
  }
}