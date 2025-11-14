import { CourseRepository } from '../repositories/CourseRepository'
import { Course } from '../entities/Course'
import { UseCase } from '../types/UseCase'

export class GetAllCourses implements UseCase<void, Course[], { courseRepo: CourseRepository }> {
  deps!: { courseRepo: CourseRepository }

  async execute(): Promise<Course[]> {
    return await this.deps.courseRepo.findAll()
  }
}