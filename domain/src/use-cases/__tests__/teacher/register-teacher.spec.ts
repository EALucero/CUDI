import { describe, it, expect, beforeEach } from 'vitest'
import { RegisterStudent } from '../../RegisterStudent'
import { Student } from '../../../entities/Student'

class InMemoryStudentRepo {
  private students: Student[] = []

  async save(student: Student) {
    this.students.push(student)
  }

  async findById(id: string) {
    return this.students.find(s => s.id === id) ?? null
  }

  async findAll() {
    return this.students
  }

  async update(student: Student) {
    const index = this.students.findIndex(s => s.id === student.id)
    if (index !== -1) this.students[index] = student
  }

  async delete(id: string) {
    this.students = this.students.filter(s => s.id !== id)
  }
}

describe('RegisterStudent', () => {
  let repo: InMemoryStudentRepo
  let useCase: RegisterStudent

  beforeEach(() => {
    repo = new InMemoryStudentRepo()
    useCase = new RegisterStudent(repo)
  })

  it('should register a student', async () => {
    const student = await useCase.execute({
      name: 'Lucía Fernández',
      email: 'lucia@cudi.edu.ar',
      birthDate: new Date('2006-09-15'),
      institutionId: 'inst-001'
    })

    expect(student).toBeInstanceOf(Student)
    expect(student.name).toBe('Lucía Fernández')
    expect(student.email).toBe('lucia@cudi.edu.ar')
    expect(student.institutionId).toBe('inst-001')
    expect(student.isActive).toBe(true)
  })
})