import { TeacherRepository } from '../repositories/TeacherRepository'
import { Teacher } from '../entities/Teacher'

export class GetAllTeachers {
  constructor(private repo: TeacherRepository) {}

  async execute(): Promise<Teacher[]> {
    return await this.repo.findAll()
  }
}