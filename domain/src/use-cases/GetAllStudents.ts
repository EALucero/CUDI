import { StudentRepository } from '../repositories/StudentRepository'
import { Student } from '../entities/Student'
import { UseCase } from '../types/UseCase'

export class GetAllStudents implements UseCase<void, Student[], { studentRepo: StudentRepository }> {
  deps!: { studentRepo: StudentRepository }

  async execute(): Promise<Student[]> {
    return await this.deps.studentRepo.findAll()
  }
}