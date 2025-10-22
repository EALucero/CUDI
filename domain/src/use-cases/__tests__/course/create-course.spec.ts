import { describe, it, expect, beforeEach } from 'vitest'
import { CreateCourse } from '../../CreateCourse'
import { Course } from '../../../entities/Course'

class InMemoryCourseRepo {
  private courses: Course[] = []

  async save(course: Course) {
    this.courses.push(course)
  }

  async findById(id: string) {
    return this.courses.find(c => c.id === id) ?? null
  }

  async findAll() {
    return this.courses
  }

  async update(course: Course) {
    const index = this.courses.findIndex(c => c.id === course.id)
    if (index !== -1) this.courses[index] = course
  }

  async delete(id: string) {
    this.courses = this.courses.filter(c => c.id !== id)
  }
}

describe('CreateCourse', () => {
  let repo: InMemoryCourseRepo
  let useCase: CreateCourse

  beforeEach(() => {
    repo = new InMemoryCourseRepo()
    useCase = new CreateCourse(repo)
  })

  it('should create a course', async () => {
    const course = await useCase.execute({
      name: 'Programación I',
      description: 'Introducción a la programación',
      institutionId: 'inst-001',
      teacherId: 'teacher-001'
    })

    expect(course).toBeInstanceOf(Course)
    expect(course.name).toBe('Programación I')
    expect(course.teacherId).toBe('teacher-001')
    expect(course.institutionId).toBe('inst-001')
    expect(course.isActive).toBe(true)
  })
})