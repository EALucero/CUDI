import { StudentRepository } from '../repositories/StudentRepository'
import { Student } from '../entities/Student'

export class GetAllStudents {
  constructor(private repo: StudentRepository) {}

  async execute(): Promise<Student[]> {
    return await this.repo.findAll()
  }
}