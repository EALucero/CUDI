import { StudentRepository } from '../repositories/StudentRepository'
import { Student } from '../entities/Student'

export class UpdateStudent {
  constructor(private repo: StudentRepository) {}

  async execute(data: {
    id: string
    name?: string
    email?: string
    birthDate?: Date
    institutionId?: string
    isActive?: boolean
  }): Promise<Student> {
    const student = await this.repo.findById(data.id)
    if (!student) throw new Error('Student not found')

    student.name = data.name ?? student.name
    student.email = data.email ?? student.email
    student.birthDate = data.birthDate ?? student.birthDate
    student.institutionId = data.institutionId ?? student.institutionId
    student.isActive = data.isActive ?? student.isActive

    await this.repo.update(student)
    return student
  }
}