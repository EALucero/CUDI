import { Student } from '@domain/entities/Student'
import { Course } from '@domain/entities/Course'
import { Institution } from '@domain/entities/Institution'

export function mapStudentToCardProps(student: Student) {
  return {
    name: student.name,
    studentId: student.id,
    status: student.isActive ? 'activo' : 'inactivo' as 'activo' | 'inactivo',
  }
}

export function mapCourseToCardProps(course: Course) {
  return {
    name: course.name,
    code: course.id,
    status: course.isActive ? 'activo' : 'inactivo' as 'activo' | 'inactivo',
  }
}

export function mapInstitutionToCardProps(institution: Institution) {
  return {
    name: institution.name,
    code: institution.id,
    status: institution.isActive ? 'activo' : 'inactivo' as 'activo' | 'inactivo',
  }
}