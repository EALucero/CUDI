import { TeacherRepository } from '../repositories/TeacherRepository'
import { UseCase } from '../types/UseCase'

type Payload = {
  id: string
}

export class DeleteTeacher implements UseCase<Payload, void, { teacherRepo: TeacherRepository }> {
  deps!: { teacherRepo: TeacherRepository }

  async execute({ id }: Payload): Promise<void> {
    await this.deps.teacherRepo.delete(id)
  }
}