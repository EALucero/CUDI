import { describe, it, expect } from 'vitest'
import { RegisterUser } from '../RegisterUser'
import { User } from '../../entities/User'
import { UserRepository } from '../../repositories/UserRepository'

class InMemoryUserRepo implements UserRepository {
  private users: User[] = []

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find(u => u.email === email) || null
  }

  async save(user: User): Promise<void> {
    this.users.push(user)
  }
}

describe('RegisterUser use case', () => {
  it('should register a new user', async () => {
    const repo = new InMemoryUserRepo()
    const usecase = new RegisterUser(repo)

    const user = await usecase.execute({
      name: 'Eduardo',
      email: 'edu@cudi.com',
      passwordHash: 'hashed123'
    })

    expect(user.name).toBe('Eduardo')
    expect(user.email).toBe('edu@cudi.com')
    expect(user.role).toBe('student')
    expect(user.isActive).toBe(true)
  })

  it('should not allow duplicate emails', async () => {
    const repo = new InMemoryUserRepo()
    const usecase = new RegisterUser(repo)

    await usecase.execute({
      name: 'Eduardo',
      email: 'edu@cudi.com',
      passwordHash: 'hashed123'
    })

    await expect(() =>
      usecase.execute({
        name: 'Otro',
        email: 'edu@cudi.com',
        passwordHash: 'hashed456'
      })
    ).rejects.toThrow('Email already registered')
  })
})