import { User } from '../entities/User'
import { UserRepository } from '../repositories/UserRepository'

export class RegisterUser {
  constructor(private readonly userRepo: UserRepository) {}

  async execute(input: {
    name: string
    email: string
    passwordHash: string
  }): Promise<User> {
    const existing = await this.userRepo.findByEmail(input.email)
    if (existing) throw new Error('Email already registered')

    const user = new User(
      crypto.randomUUID(),
      input.name,
      input.email,
      input.passwordHash
    )

    await this.userRepo.save(user)
    return user
  }
}