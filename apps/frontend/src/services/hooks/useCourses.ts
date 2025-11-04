import { useEffect, useState } from 'react'
import { getCourses } from '@services/api/courses'
import { Course } from '@domain/entities/Course'

export function useCourses() {
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    getCourses()
      .then(setCourses)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  return { courses, loading, error }
}