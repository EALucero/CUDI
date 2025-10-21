import { CourseRepository } from '../repositories/CourseRepository'
import { Course } from '../entities/Course'

export class GetAllCourses {
  constructor(private repo: CourseRepository) {}

  async execute(): Promise<Course[]> {
    return await this.repo.findAll()
  }
}