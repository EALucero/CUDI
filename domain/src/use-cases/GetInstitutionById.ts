import { InstitutionRepository } from '../repositories/InstitutionRepository'
import { Institution } from '../entities/Institution'
import { UseCase } from '../types/UseCase'

export class GetInstitutionById implements UseCase<string, Institution | null, { institutionRepo: InstitutionRepository }> {
  deps!: { institutionRepo: InstitutionRepository }

  async execute(id: string): Promise<Institution | null> {
    return await this.deps.institutionRepo.findById(id)
  }
}