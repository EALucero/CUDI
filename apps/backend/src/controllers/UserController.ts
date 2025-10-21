import { Request, Response, NextFunction } from 'express'
import { RegisterUser } from '@cudi/domain/src/use-cases/RegisterUser'
import { LoginUser } from '@cudi/domain/src/use-cases/LoginUser'
import { PrismaUserRepository } from '../repositories/PrismaUserRepository'
import { HttpError } from '../errors/HttpError'
import bcrypt from 'bcryptjs'

const userRepo = new PrismaUserRepository()

export class UserController {
  static async register(req: Request, res: Response, next: NextFunction) {
    const { name, email, password } = req.body
    
    try {
      const passwordHash = await bcrypt.hash(password, 10)
      const usecase = new RegisterUser(userRepo)
      const user = await usecase.execute({ name, email, passwordHash })

      res.status(201).json({ id: user.id, email: user.email })
    } catch (err) {
      if (err instanceof Error) {
        return next(new HttpError(400, err.message, 'REGISTER_FAILED'))
      }
      next(err);
    }
  }

  static async login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body

    try {
      const usecase = new LoginUser(userRepo)
      const user = await usecase.execute({
        email,
        passwordHash: password
      })

      const match = await bcrypt.compare(password, user.passwordHash)
      if (!match) throw new Error('Invalid credentials')

      res.status(200).json({ id: user.id, email: user.email })
    } catch (err) {
      if (err instanceof Error) {
        return next(new HttpError(401, err.message, 'LOGIN_FAILED'))
      }
      next(err);
    }
  }
}