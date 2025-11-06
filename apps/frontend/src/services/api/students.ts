import { Student } from '@domain/entities/Student'
import { http } from '@services/http'

export async function getCourses(): Promise<Student[]> {
  const data = await http<Student[]>('/students')
  return data.map(
    (s) =>
      new Student(
        s.id,
        s.name,
        s.email,
        s.birthDate,
        s.institutionId,
        s.isActive
      )
  )
}