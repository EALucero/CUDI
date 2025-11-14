import { CourseRepository } from '../repositories/CourseRepository'
import { Course } from '../entities/Course'
import { UseCase } from '../types/UseCase'

export class GetCourseById implements UseCase<string, Course | null, { courseRepo: CourseRepository }> {
  deps!: { courseRepo: CourseRepository }

  async execute(id: string): Promise<Course | null> {
    return await this.deps.courseRepo.findById(id)
  }
}