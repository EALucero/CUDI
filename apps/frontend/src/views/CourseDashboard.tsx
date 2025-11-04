import { useCourses } from '@services/hooks/useCourses'
import { mapCourseToCardProps } from '@helpers/mappers'
import { CourseCard } from '@components/ui/CourseCard'

export function CourseDashboard() {
  const { courses, loading, error } = useCourses()

  if (loading) return <p className="text-sm text-muted">Cargando cursos...</p>
  if (error) return <p className="text-sm text-red-600">Error al cargar cursos</p>
  if (courses.length === 0) return <p className="text-sm text-muted">No hay cursos disponibles</p>

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold">Cursos disponibles</h2>
      <div className="grid gap-4">
        {courses.map((course) => (
          <CourseCard key={course.id} {...mapCourseToCardProps(course)} />
        ))}
      </div>
    </section>
  )
}