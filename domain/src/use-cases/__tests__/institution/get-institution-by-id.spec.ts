import { describe, it, expect, beforeEach } from 'vitest'
import { GetInstitutionById } from '../../GetInstitutionById'
import { Institution } from '../../../entities/Institution'

class InMemoryInstitutionRepo {
  private institutions: Institution[] = []

  async save(institution: Institution) {
    this.institutions.push(institution)
  }

  async findById(id: string) {
    return this.institutions.find(i => i.id === id) ?? null
  }

  async findAll() {
    return this.institutions
  }

  async update(institution: Institution) {
    const index = this.institutions.findIndex(i => i.id === institution.id)
    if (index !== -1) this.institutions[index] = institution
  }

  async delete(id: string) {
    this.institutions = this.institutions.filter(i => i.id !== id)
  }
}

describe('GetInstitutionById', () => {
  let repo: InMemoryInstitutionRepo
  let useCase: GetInstitutionById
  let testInstitution: Institution

  beforeEach(async () => {
    repo = new InMemoryInstitutionRepo()
    useCase = new GetInstitutionById(repo)

    testInstitution = new Institution(
      'inst-001',
      'Instituto CUDI',
      'Av. Siempreviva 123',
      'contacto@cudi.edu.ar',
      '+54 11 5555-1234'
    )

    await repo.save(testInstitution)
  })

  it('should return an institution by ID', async () => {
    const result = await useCase.execute('inst-001')

    expect(result).toBeInstanceOf(Institution)
    expect(result?.name).toBe('Instituto CUDI')
    expect(result?.email).toBe('contacto@cudi.edu.ar')
  })

  it('should return null if institution not found', async () => {
    const result = await useCase.execute('non-existent-id')
    expect(result).toBeNull()
  })
})