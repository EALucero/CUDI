import { StudentRepository } from '../repositories/StudentRepository'
import { Student } from '../entities/Student'
import { UseCase } from '../types/UseCase'

type Payload = {
  id: string
  data: Partial<{
    name: string
    email: string
    birthDate: Date
    institutionId: string
    isActive: boolean
  }>
}

export class UpdateStudent implements UseCase<Payload, Student, { studentRepo: StudentRepository }> {
  deps!: { studentRepo: StudentRepository }

  async execute({ id, data }: Payload): Promise<Student> {
    const student = await this.deps.studentRepo.findById(id)
    if (!student) throw new Error('Student not found')

    Object.assign(student, data)
    await this.deps.studentRepo.save(student)
    return student
  }
}