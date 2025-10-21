import { StudentRepository } from '../repositories/StudentRepository'
import { Student } from '../entities/Student'
import { v4 as uuid } from 'uuid'

export class RegisterStudent {
  constructor(private repo: StudentRepository) {}

  async execute(data: {
    name: string
    email: string
    birthDate: Date
    institutionId: string
  }): Promise<Student> {
    const student = new Student(
      uuid(),
      data.name,
      data.email,
      data.birthDate,
      data.institutionId
    )
    await this.repo.save(student)
    return student
  }
}