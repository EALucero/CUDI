import { CourseRepository } from '../repositories/CourseRepository'
import { Course } from '../entities/Course'
import { v4 as uuid } from 'uuid'

export class CreateCourse {
  constructor(private repo: CourseRepository) {}

  async execute(data: {
    name: string
    description: string
    institutionId: string
    teacherId: string
  }): Promise<Course> {
    const course = new Course(
      uuid(),
      data.name,
      data.description,
      data.institutionId,
      data.teacherId
    )
    await this.repo.save(course)
    return course
  }
}