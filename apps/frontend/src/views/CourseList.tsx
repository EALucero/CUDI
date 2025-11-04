import { useCourses } from '@services/hooks/useCourses'
import { mapCourseToCardProps } from '@helpers/mappers'
import { CourseCard } from '@components/ui/CourseCard'

export function CourseList() {
  const { courses, loading, error } = useCourses()

  if (loading) return <p className="text-sm text-muted">Cargando cursos...</p>
  if (error) return <p className="text-sm text-red-600">Error al cargar cursos</p>
  if (courses.length === 0) return <p className="text-sm text-muted">No hay cursos disponibles</p>

  return (
    <div className="grid gap-4">
      {courses.map((course) => (
        <CourseCard key={course.id} {...mapCourseToCardProps(course)} />
      ))}
    </div>
  )
}