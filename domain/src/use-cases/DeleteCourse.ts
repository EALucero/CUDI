import { CourseRepository } from '../repositories/CourseRepository'

export class DeleteCourse {
  constructor(private repo: CourseRepository) {}

  async execute(id: string): Promise<void> {
    await this.repo.delete(id)
  }
}