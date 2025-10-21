import { Student } from '../entities/Student'

export interface StudentRepository {
  findById(id: string): Promise<Student | null>
  findAll(): Promise<Student[]>
  save(student: Student): Promise<void>
  update(student: Student): Promise<void>
  delete(id: string): Promise<void>
}