import { InstitutionRepository } from '../repositories/InstitutionRepository'
import { Institution } from '../entities/Institution'

export class GetInstitutionById {
  constructor(private repo: InstitutionRepository) {}

  async execute(id: string): Promise<Institution | null> {
    return await this.repo.findById(id)
  }
}