import { useEffect, useState } from 'react'

export function useFetch<T = unknown>(url: string, options?: RequestInit) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let active = true
    setLoading(true)
    fetch(url, options)
      .then(async (res) => {
        if (!res.ok) throw new Error(`Request failed: ${res.status}`)
        const json = (await res.json()) as T
        if (active) setData(json)
      })
      .catch((e) => active && setError(e as Error))
      .finally(() => active && setLoading(false))

    return () => {
      active = false
    }
  }, [url])

  return { data, loading, error }
}