import { TeacherRepository } from '../repositories/TeacherRepository'
import { Teacher } from '../entities/Teacher'
import { UseCase } from '../types/UseCase'

type Payload = {
  id: string
  data: Partial<{
    name: string
    email: string
    institutionId: string
    isActive: boolean
  }>
}

export class UpdateTeacher implements UseCase<Payload, Teacher, { teacherRepo: TeacherRepository }> {
  deps!: { teacherRepo: TeacherRepository }

  async execute({ id, data }: Payload): Promise<Teacher> {
    const teacher = await this.deps.teacherRepo.findById(id)
    if (!teacher) throw new Error('Teacher not found')

    Object.assign(teacher, data)
    await this.deps.teacherRepo.save(teacher)
    return teacher
  }
}