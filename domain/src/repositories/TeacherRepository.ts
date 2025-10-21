import { Teacher } from '../entities/Teacher'

export interface TeacherRepository {
  findById(id: string): Promise<Teacher | null>
  findAll(): Promise<Teacher[]>
  save(teacher: Teacher): Promise<void>
  update(teacher: Teacher): Promise<void>
  delete(id: string): Promise<void>
}