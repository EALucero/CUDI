import { describe, it, expect, beforeEach } from 'vitest'
import { RegisterInstitution } from '../../RegisterInstitution'
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

describe('RegisterInstitution', () => {
  let repo: InMemoryInstitutionRepo
  let useCase: RegisterInstitution

  beforeEach(() => {
    repo = new InMemoryInstitutionRepo()
    useCase = new RegisterInstitution(repo)
  })

  it('should register a new institution', async () => {
    const institution = await useCase.execute({
      name: 'Instituto CUDI',
      address: 'Av. Siempreviva 123',
      email: 'contacto@cudi.edu.ar',
      phone: '+54 11 5555-1234'
    })

    expect(institution).toBeInstanceOf(Institution)
    expect(institution.name).toBe('Instituto CUDI')
    expect(institution.email).toBe('contacto@cudi.edu.ar')
    expect(institution.isActive).toBe(true)
  })
})