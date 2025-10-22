import { describe, it, expect, beforeEach } from 'vitest'
import { RegisterEnrollment } from '../../RegisterEnrollment'
import { Enrollment } from '../../../entities/Enrollment'

class InMemoryEnrollmentRepo {
  private enrollments: Enrollment[] = []

  async save(enrollment: Enrollment) {
    this.enrollments.push(enrollment)
  }

  async findById(id: string) {
    return this.enrollments.find(e => e.id === id) ?? null
  }

  async findAll() {
    return this.enrollments
  }

  async update(enrollment: Enrollment) {
    const index = this.enrollments.findIndex(e => e.id === enrollment.id)
    if (index !== -1) this.enrollments[index] = enrollment
  }

  async delete(id: string) {
    this.enrollments = this.enrollments.filter(e => e.id !== id)
  }
}

describe('RegisterEnrollment', () => {
  let repo: InMemoryEnrollmentRepo
  let useCase: RegisterEnrollment

  beforeEach(() => {
    repo = new InMemoryEnrollmentRepo()
    useCase = new RegisterEnrollment(repo)
  })

  it('should register an enrollment', async () => {
    const enrollment = await useCase.execute({
      studentId: 'student-001',
      courseId: 'course-001'
    })

    expect(enrollment).toBeInstanceOf(Enrollment)
    expect(enrollment.studentId).toBe('student-001')
    expect(enrollment.courseId).toBe('course-001')
    expect(enrollment.status).toBe('active')
    expect(enrollment.enrolledAt).toBeInstanceOf(Date)
  })
})