import { InstitutionRepository } from '../repositories/InstitutionRepository'
import { Institution } from '../entities/Institution'
import { v4 as uuid } from 'uuid'
import { UseCase } from '../types/UseCase'

type Payload = {
  name: string
  address: string
  email: string
  phone: string
  isActive: boolean
}

export class CreateInstitution implements UseCase<Payload, Institution, { institutionRepo: InstitutionRepository }> {
  deps!: { institutionRepo: InstitutionRepository }

  async execute(data: Payload): Promise<Institution> {
    const institution = new Institution(
      uuid(),
      data.name,
      data.address,
      data.email,
      data.phone,
      data.isActive
    )

    return await this.deps.institutionRepo.create(institution)
  }
}