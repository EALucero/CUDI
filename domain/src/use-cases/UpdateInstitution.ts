import { InstitutionRepository } from '../repositories/InstitutionRepository'
import { Institution } from '../entities/Institution'
import { UseCase } from '../types/UseCase'

type Payload = {
  id: string
  data: Partial<{
    name: string
    address: string
    email: string
    phonee: string
    isActive: boolean
  }>
}

export class UpdateInstitution implements UseCase<Payload, Institution, { institutionRepo: InstitutionRepository }> {
  deps!: { institutionRepo: InstitutionRepository }

  async execute({ id, data }: Payload): Promise<Institution> {
    const institution = await this.deps.institutionRepo.findById(id)
    if (!institution) throw new Error('Institution not found')

    Object.assign(institution, data)
    await this.deps.institutionRepo.save(institution)
    return institution
  }
}