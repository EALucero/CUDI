import { PrismaCourseRepository } from '../repositories/PrismaCourseRepository'
import { PrismaEnrollmentRepository } from '../repositories/PrismaEnrollmentRepository'
import { PrismaInstitutionRepository } from '../repositories/PrismaInstitutionRepository'
import { PrismaStudentRepository } from '../repositories/PrismaEnrollmentRepository'
import { PrismaTeacherRepository } from '../repositories/PrismaTeacherRepository'
import { UseCaseName } from './registry'

export function resolveDependencies(name: UseCaseName): Record<string, unknown> {
  if (name.startsWith('course.')) {
    return { courseRepo: new PrismaCourseRepository() }
  }

  if (name.startsWith('enrollment.')) {
    return { enrollmentRepo: new PrismaEnrollmentRepository() }
  }

  if (name.startsWith('institution.')) {
    return { enrollmentRepo: new PrismaInstitutionRepository() }
  }

  if (name.startsWith('student.')) {
    return { enrollmentRepo: new PrismaStudentRepository() }
  }

  if (name.startsWith('teacher.')) {
    return { enrollmentRepo: new PrismaTeacherRepository() }
  }

  return {}
}