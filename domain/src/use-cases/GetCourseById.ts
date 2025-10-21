import { CourseRepository } from '../repositories/CourseRepository'
import { Course } from '../entities/Course'

export class GetCourseById {
  constructor(private repo: CourseRepository) {}

  async execute(id: string): Promise<Course | null> {
    return await this.repo.findById(id)
  }
}