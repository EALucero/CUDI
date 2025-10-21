import { UserRepository } from '../repositories/UserRepository'
import { User } from '../entities/User'

export class LoginUser {
  constructor(private readonly userRepo: UserRepository) {}

  async execute(input: {
    email: string
    passwordHash: string
  }): Promise<User> {
    const user = await this.userRepo.findByEmail(input.email)
    if (!user) throw new Error('User not found')
    if (user.passwordHash !== input.passwordHash) throw new Error('Invalid credentials')
    return user
  }
}