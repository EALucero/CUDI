import { Course } from '@domain/entities/Course'
import { http } from '@services/http'

export async function getCourses(): Promise<Course[]> {
  const data = await http<Course[]>('/courses')
  return data.map(
    (c) =>
      new Course(
        c.id,
        c.name,
        c.description,
        c.institutionId,
        c.teacherId,
        c.isActive
      )
  )
}