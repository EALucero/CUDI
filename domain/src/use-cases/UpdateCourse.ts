import { CourseRepository } from '../repositories/CourseRepository'
import { Course } from '../entities/Course'
import { UseCase } from '../types/UseCase'

type Payload = {
  id: string
  data: Partial<{
    name: string
    description: string
    institutionId: string
    teacherId: string
    isActive: boolean
  }>
}

export class UpdateCourse implements UseCase<Payload, Course, { courseRepo: CourseRepository }> {
  deps!: { courseRepo: CourseRepository }

  async execute({ id, data }: Payload): Promise<Course> {
    const course = await this.deps.courseRepo.findById(id)
    if (!course) throw new Error('Course not found')

    Object.assign(course, data)
    await this.deps.courseRepo.save(course)
    return course
  }
}