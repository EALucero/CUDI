import { TeacherRepository } from '../repositories/TeacherRepository'
import { Teacher } from '../entities/Teacher'
import { UseCase } from '../types/UseCase'

export class GetTeacherById implements UseCase<string, Teacher | null, { teacherRepo: TeacherRepository }> {
  deps!: { teacherRepo: TeacherRepository }

  async execute(id: string): Promise<Teacher | null> {
    return await this.deps.teacherRepo.findById(id)
  }
}