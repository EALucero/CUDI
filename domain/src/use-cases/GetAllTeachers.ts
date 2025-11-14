import { TeacherRepository } from '../repositories/TeacherRepository'
import { Teacher } from '../entities/Teacher'
import { UseCase } from '../types/UseCase'

export class GetAllTeachers implements UseCase<void, Teacher[], { teacherRepo: TeacherRepository }> {
  deps!: { teacherRepo: TeacherRepository }

  async execute(): Promise<Teacher[]> {
    return await this.deps.teacherRepo.findAll()
  }
}