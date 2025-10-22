import { describe, it, expect } from 'vitest'
import { LoginUser } from '../../LoginUser'
import { User } from '../../../entities/User'
import { UserRepository } from '../../../repositories/UserRepository'

class InMemoryUserRepo implements UserRepository {
  private users: User[] = []

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find(u => u.email === email) || null
  }

  async save(user: User): Promise<void> {
    this.users.push(user)
  }
}

describe('LoginUser use case', () => {
  it('should login with correct credentials', async () => {
    const repo = new InMemoryUserRepo()
    const user = new User('1', 'Eduardo', 'edu@cudi.com', 'hashed123')
    await repo.save(user)

    const usecase = new LoginUser(repo)
    const result = await usecase.execute({
      email: 'edu@cudi.com',
      passwordHash: 'hashed123'
    })

    expect(result.name).toBe('Eduardo')
  })

  it('should fail if user not found', async () => {
    const repo = new InMemoryUserRepo()
    const usecase = new LoginUser(repo)

    await expect(() =>
      usecase.execute({
        email: 'no@cudi.com',
        passwordHash: 'hashed123'
      })
    ).rejects.toThrow('User not found')
  })

  it('should fail if password is incorrect', async () => {
    const repo = new InMemoryUserRepo()
    const user = new User('1', 'Eduardo', 'edu@cudi.com', 'hashed123')
    await repo.save(user)

    const usecase = new LoginUser(repo)

    await expect(() =>
      usecase.execute({
        email: 'edu@cudi.com',
        passwordHash: 'wrong'
      })
    ).rejects.toThrow('Invalid credentials')
  })
})