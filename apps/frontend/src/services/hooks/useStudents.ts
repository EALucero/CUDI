import { useEffect, useState } from 'react'
import { getStudents } from '@services/api/students'
import { Student } from '@domain/entities/Student'

export function useStudents() {
  const [students, setStudents] = useState<Student[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    getStudents()
      .then(setStudents)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  return { students, loading, error }
}