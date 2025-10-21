import { PrismaClient } from '@prisma/client'
import { User } from '@cudi/domain/src/entities/User'
import { UserRepository } from '@cudi/domain/src/repositories/UserRepository'

const prisma = new PrismaClient()

export class PrismaUserRepository implements UserRepository {
  async findByEmail(email: string): Promise<User | null> {
    const data = await prisma.user.findUnique({ where: { email } })
    return data ? this.toDomain(data) : null
  }

  async findById(id: string): Promise<User | null> {
    const data = await prisma.user.findUnique({ where: { id } })
    return data ? this.toDomain(data) : null
  }

  async findAll(): Promise<User[]> {
    const users = await prisma.user.findMany({ where: { isActive: true } })
    return users.map(this.toDomain)
  }

  async save(user: User): Promise<void> {
    await prisma.user.create({
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        passwordHash: user.passwordHash,
        role: user.role,
        isActive: user.isActive,
        createdAt: user.createdAt
      }
    })
  }

  async update(user: User): Promise<void> {
    await prisma.user.update({
      where: { id: user.id },
      data: {
        name: user.name,
        email: user.email,
        role: user.role,
        isActive: user.isActive
      }
    })
  }

  async delete(id: string): Promise<void> {
    await prisma.user.update({
      where: { id },
      data: { isActive: false }
    })
  }

  private toDomain(data: any): User {
    return new User(
      data.id,
      data.name,
      data.email,
      data.passwordHash,
      data.role,
      data.isActive,
      data.createdAt
    )
  }
}