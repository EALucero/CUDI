import { StudentRepository } from '../repositories/StudentRepository'
import { Student } from '../entities/Student'

export class GetStudentById {
  constructor(private repo: StudentRepository) {}

  async execute(id: string): Promise<Student | null> {
    return await this.repo.findById(id)
  }
}