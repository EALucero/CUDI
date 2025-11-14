import { TeacherRepository } from '../repositories/TeacherRepository'
import { Teacher } from '../entities/Teacher'
import { v4 as uuid } from 'uuid'
import { UseCase } from '../types/UseCase'

type Payload = {
  name: string
  email: string
  institutionId: string
  isActive: boolean
}

export class CreateTeacher implements UseCase<Payload, Teacher, { teacherRepo: TeacherRepository }> {
  deps!: { teacherRepo: TeacherRepository }

  async execute(data: Payload): Promise<Teacher> {
    const teacher = new Teacher(
      uuid(),
      data.name,
      data.email,
      data.institutionId,
      data.isActive
    )

    return await this.deps.teacherRepo.create(teacher)
  }
}