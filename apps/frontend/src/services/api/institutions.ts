import { Institution } from '@domain/entities/Institution'

export async function getInstitutions(): Promise<Institution[]> {
  await new Promise((r) => setTimeout(r, 500))
  return [
    new Institution(
      'inst-001',
      'Universidad Blockchain',
      'Av. Cripto 123, Buenos Aires',
      'contacto@ublock.edu.ar',
      '+54 11 5555-1234'
    ),
    new Institution(
      'inst-002',
      'Instituto Cripto',
      'Calle Token 456, Córdoba',
      'info@icripto.org',
      '+54 351 444-5678',
      false
    ),
  ]
}