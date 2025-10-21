import { TeacherRepository } from '../repositories/TeacherRepository'
import { Teacher } from '../entities/Teacher'

export class GetTeacherById {
  constructor(private repo: TeacherRepository) {}

  async execute(id: string): Promise<Teacher | null> {
    return await this.repo.findById(id)
  }
}