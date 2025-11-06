export const API_BASE_URL = 'http://localhost:3000/api'

export async function http<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })

  if (!res.ok) {
    const error = await res.text()
    throw new Error(`Error ${res.status}: ${error}`)
  }

  return res.json()
}