import { StudentRepository } from '../repositories/StudentRepository'
import { Student } from '../entities/Student'
import { v4 as uuid } from 'uuid'
import { UseCase } from '../types/UseCase'

type Payload = {
  name: string
  email: string
  birthDate: Date
  institutionId: string
  isActive: boolean
}

export class CreateStudent implements UseCase<Payload, Student, { studentRepo: StudentRepository }> {
  deps!: { studentRepo: StudentRepository }

  async execute(data: Payload): Promise<Student> {
    const student = new Student(
      uuid(),
      data.name,
      data.email,
      data.birthDate,
      data.institutionId,
      data.isActive
    )

    return await this.deps.studentRepo.create(student)
  }
}