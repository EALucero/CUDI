import { Student } from '@domain/entities/Student'

export async function getStudents(): Promise<Student[]> {
  await new Promise((r) => setTimeout(r, 500))
  return [
    new Student(
      'stu-001',
      'Lucía Fernández',
      'lucia@blockchain.edu',
      new Date('2000-05-12'),
      'inst-1'
    ),
    new Student(
      'stu-002',
      'Carlos Gómez',
      'carlos@cripto.org',
      new Date('1998-11-03'),
      'inst-1',
      false
    ),
  ]
}
