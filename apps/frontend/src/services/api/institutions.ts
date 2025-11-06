import { Institution } from '@domain/entities/Institution'
import { http } from '@services/http'

export async function getCourses(): Promise<Institution[]> {
  const data = await http<Institution[]>('/institutuions')
  return data.map(
    (i) =>
      new Institution(
        i.id,
        i.name,
        i.address,
        i.email,
        i.phone,
        i.isActive
      )
  )
}