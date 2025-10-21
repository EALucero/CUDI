import { TeacherRepository } from '../repositories/TeacherRepository'
import { Teacher } from '../entities/Teacher'

export class UpdateTeacher {
  constructor(private repo: TeacherRepository) {}

  async execute(data: {
    id: string
    name?: string
    email?: string
    institutionId?: string
    isActive?: boolean
  }): Promise<Teacher> {
    const teacher = await this.repo.findById(data.id)
    if (!teacher) throw new Error('Teacher not found')

    teacher.name = data.name ?? teacher.name
    teacher.email = data.email ?? teacher.email
    teacher.institutionId = data.institutionId ?? teacher.institutionId
    teacher.isActive = data.isActive ?? teacher.isActive

    await this.repo.update(teacher)
    return teacher
  }
}