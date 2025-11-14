import { CreateCourse } from '@domain/use-cases/CreateCourse'
import { GetAllCourses } from '@domain/use-cases/GetAllCourses'
import { GetCourseById } from '@domain/use-cases/GetCourseById'
import { UpdateCourse } from '@domain/use-cases/UpdateCourse'
import { DeleteCourse } from '@domain/use-cases/DeleteCourse'
import { CreateEnrollment } from '@domain/use-cases/CreateEnrollment'
import { GetAllEnrollments } from '@domain/use-cases/GetAllEnrollments'
import { GetEnrollmentById } from '@domain/use-cases/GetEnrollmentById'
import { UpdateEnrollment } from '@domain/use-cases/UpdateEnrollment'
import { DeleteEnrollment } from '@domain/use-cases/DeleteEnrollment'
import { CreateInstitution } from '@domain/use-cases/CreateInstitution'
import { GetAllInstitutions } from '@domain/use-cases/GetAllInstitutions'
import { GetInstitutionById } from '@domain/use-cases/GetInstitutionById'
import { UpdateInstitution } from '@domain/use-cases/UpdateInstitution'
import { DeleteInstitution } from '@domain/use-cases/DeleteInstitution'
import { CreateStudent } from '@domain/use-cases/CreateStudent'
import { GetAllStudents } from '@domain/use-cases/GetAllStudents'
import { GetStudentById } from '@domain/use-cases/GetStudentById'
import { UpdateStudent } from '@domain/use-cases/UpdateStudent'
import { DeleteStudent } from '@domain/use-cases/DeleteStudent'
import { CreateTeacher } from '@domain/use-cases/CreateTeacher'
import { GetAllTeachers } from '@domain/use-cases/GetAllTeachers'
import { GetTeacherById } from '@domain/use-cases/GetTeacherById'
import { UpdateTeacher } from '@domain/use-cases/UpdateTeacher'
import { DeleteTeacher } from '@domain/use-cases/DeleteTeacher'

export const useCaseRegistry = {
  'course.create': CreateCourse,
  'course.getAll': GetAllCourses,
  'course.getId': GetCourseById,
  'course.update': UpdateCourse,
  'course.delete': DeleteCourse,
  'enrollment.create': CreateEnrollment,
  'enrollment.getAll': GetAllEnrollments,
  'enrollment.getId': GetEnrollmentById,
  'enrollment.update': UpdateEnrollment,
  'enrollment.delete': DeleteEnrollment,
  'institution.create': CreateInstitution,
  'institution.getAll': GetAllInstitutions,
  'institution.getId': GetInstitutionById,
  'institution.update': UpdateInstitution,
  'institution.delete': DeleteInstitution,
  'student.create': CreateStudent,
  'student.getAll': GetAllStudents,
  'student.getId': GetStudentById,
  'student.update': UpdateStudent,
  'student.delete': DeleteStudent,
  'teacher.create': CreateTeacher,
  'teacher.getAll': GetAllTeachers,
  'teacher.getId': GetTeacherById,
  'teacher.update': UpdateTeacher,
  'teacher.delete': DeleteTeacher,
} as const;

export type UseCaseName = keyof typeof useCaseRegistry;