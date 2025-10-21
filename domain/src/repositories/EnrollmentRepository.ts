import { Enrollment } from '../entities/Enrollment'

export interface EnrollmentRepository {
  findById(id: string): Promise<Enrollment | null>
  findAll(): Promise<Enrollment[]>
  save(enrollment: Enrollment): Promise<void>
  update(enrollment: Enrollment): Promise<void>
  delete(id: string): Promise<void>
}