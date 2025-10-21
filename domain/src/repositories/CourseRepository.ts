import { Course } from '../entities/Course'

export interface CourseRepository {
  findById(id: string): Promise<Course | null>
  findAll(): Promise<Course[]>
  save(course: Course): Promise<void>
  update(course: Course): Promise<void>
  delete(id: string): Promise<void>
}