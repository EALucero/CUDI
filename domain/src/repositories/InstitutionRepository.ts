import { Institution } from '../entities/Institution'

export interface InstitutionRepository {
  findById(id: string): Promise<Institution | null>
  findAll(): Promise<Institution[]>
  save(institution: Institution): Promise<void>
  update(institution: Institution): Promise<void>
  delete(id: string): Promise<void>
}