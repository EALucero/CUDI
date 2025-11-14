import { CourseRepository } from '../repositories/CourseRepository'
import { Course } from '../entities/Course'
import { v4 as uuid } from 'uuid'
import { UseCase } from '../types/UseCase'

type Payload = {
  name: string
  description: string
  institutionId: string
  teacherId: string
}

export class CreateCourse implements UseCase<Payload, Course, { courseRepo: CourseRepository }> {
  deps!: { courseRepo: CourseRepository }

  async execute(data: Payload): Promise<Course> {
    const course = new Course(
      uuid(),
      data.name,
      data.description,
      data.institutionId,
      data.teacherId
    )

    return await this.deps.courseRepo.create(course)    
  }
}