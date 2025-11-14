import { StudentRepository } from '../repositories/StudentRepository'
import { Student } from '../entities/Student'
import { UseCase } from '../types/UseCase'

export class GetStudentById implements UseCase<string, Student | null, { studentRepo: StudentRepository }> {
  deps!: { studentRepo: StudentRepository }

  async execute(id: string): Promise<Student | null> {
    return await this.deps.studentRepo.findById(id)
  }
}