import { useEffect, useState } from 'react'
import { getInstitutions } from '@services/api/institutions'
import { Institution } from '@domain/entities/Institution'

export function useInstitutions() {
  const [institutions, setInstitutions] = useState<Institution[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    getInstitutions()
      .then(setInstitutions)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  return { institutions, loading, error }
}