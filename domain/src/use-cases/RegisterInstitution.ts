import { InstitutionRepository } from '../repositories/InstitutionRepository'
import { Institution } from '../entities/Institution'
import { v4 as uuid } from 'uuid'

export class RegisterInstitution {
  constructor(private repo: InstitutionRepository) {}

  async execute(data: {
    name: string
    address: string
    email: string
    phone: string
  }): Promise<Institution> {
    const institution = new Institution(
      uuid(),
      data.name,
      data.address,
      data.email,
      data.phone
    )
    await this.repo.save(institution)
    return institution
  }
}