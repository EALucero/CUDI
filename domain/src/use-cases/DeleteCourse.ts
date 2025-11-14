import { CourseRepository } from '../repositories/CourseRepository'
import { UseCase } from '../types/UseCase'

type Payload = {
  id: string
}

export class DeleteCourse implements UseCase<Payload, void, { courseRepo: CourseRepository }> {
  deps!: { courseRepo: CourseRepository }

  async execute({ id }: Payload): Promise<void> {
    await this.deps.courseRepo.delete(id)
  }
}