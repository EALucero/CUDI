import { Student } from '../entities/Student'

export interface StudentRepository {
  create(enrollment: Student): Promise<Student>
  findById(id: string): Promise<Student | null>
  findAll(): Promise<Student[]>
  save(student: Student): Promise<void>
  update(student: Student): Promise<void>
  delete(id: string): Promise<void>
}