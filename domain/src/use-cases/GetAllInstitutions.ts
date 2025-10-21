import { InstitutionRepository } from '../repositories/InstitutionRepository'
import { Institution } from '../entities/Institution'

export class GetAllInstitutions {
  constructor(private repo: InstitutionRepository) {}

  async execute(): Promise<Institution[]> {
    return await this.repo.findAll()
  }
}