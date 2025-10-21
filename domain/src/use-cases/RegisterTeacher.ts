import { TeacherRepository } from '../repositories/TeacherRepository'
import { Teacher } from '../entities/Teacher'
import { v4 as uuid } from 'uuid'

export class RegisterTeacher {
  constructor(private repo: TeacherRepository) {}

  async execute(data: {
    name: string
    email: string
    institutionId: string
  }): Promise<Teacher> {
    const teacher = new Teacher(
      uuid(),
      data.name,
      data.email,
      data.institutionId
    )
    await this.repo.save(teacher)
    return teacher
  }
}