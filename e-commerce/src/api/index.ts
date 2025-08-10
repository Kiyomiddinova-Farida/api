const BASE_URL = '/api'

export async function apiGet<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, init)
  if (!res.ok) throw new Error(`API error: ${res.status}`)
  return (await res.json()) as T
}