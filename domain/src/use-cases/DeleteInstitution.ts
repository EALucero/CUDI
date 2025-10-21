import { InstitutionRepository } from '../repositories/InstitutionRepository'

export class DeleteInstitution {
  constructor(private repo: InstitutionRepository) {}

  async execute(id: string): Promise<void> {
    await this.repo.delete(id)
  }
}