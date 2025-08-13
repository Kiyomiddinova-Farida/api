import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

// Types for the DummyJSON recipes
interface Recipe {
  id: number
  name: string
  image: string
  tags: string[]
  rating: number
  cuisine: string
}

interface RecipesResponse {
  recipes: Recipe[]
  total: number
  skip: number
  limit: number
}

const PAGE_SIZE = 12

function useRecipes(tag: string | null, page: number) {
  const [data, setData] = useState<RecipesResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    const fetchRecipes = async () => {
      setLoading(true)
      setError(null)
      try {
        const skip = (page - 1) * PAGE_SIZE
        const base = tag ? 'https://dummyjson.com/recipes/search' : 'https://dummyjson.com/recipes'
        const url = new URL(base)
        url.searchParams.set('limit', String(PAGE_SIZE))
        url.searchParams.set('skip', String(skip))
        if (tag) {
          url.searchParams.set('q', tag)
        }
        const res = await fetch(url.toString(), { signal: controller.signal })
        if (!res.ok) throw new Error('Failed to fetch')
        const json = (await res.json()) as RecipesResponse
        setData(json)
      } catch (e: any) {
        if (e.name !== 'AbortError') setError(e.message ?? 'Error')
      } finally {
        setLoading(false)
      }
    }

    fetchRecipes()
    return () => controller.abort()
  }, [tag, page])

  return { data, loading, error }
}

function useAllTags() {
  const [tags, setTags] = useState<string[]>([])
  useEffect(() => {
    let mounted = true
    // Fetch a chunk then derive unique tags client-side (DummyJSON lacks /tags endpoint)
    fetch('https://dummyjson.com/recipes?limit=200')
      .then((r) => r.json())
      .then((j: RecipesResponse) => {
        if (!mounted) return
        const uniq = Array.from(
          new Set(j.recipes.flatMap((r) => r.tags.map((t) => t.trim()).filter(Boolean)))
        ).sort((a, b) => a.localeCompare(b))
        setTags(uniq)
      })
      .catch(() => setTags([]))
    return () => {
      mounted = false
    }
  }, [])
  return tags
}

export default function RecipesPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const tag = searchParams.get('tag')
  const page = Math.max(1, Number(searchParams.get('page') || '1'))

  const { data, loading, error } = useRecipes(tag, page)
  const tags = useAllTags()

  const totalPages = useMemo(() => {
    if (!data) return 1
    return Math.max(1, Math.ceil(data.total / PAGE_SIZE))
  }, [data])

  const apply = (next: { tag?: string | null; page?: number }) => {
    const sp = new URLSearchParams(searchParams)
    if (next.tag !== undefined) {
      if (next.tag) sp.set('tag', next.tag)
      else sp.delete('tag')
      // Reset page on tag change
      sp.delete('page')
    }
    if (next.page !== undefined) {
      if (next.page <= 1) sp.delete('page')
      else sp.set('page', String(next.page))
    }
    setSearchParams(sp, { replace: true })
  }

  return (
    <div className="min-h-dvh bg-gray-50">
      <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center gap-3">
          <Link to="/" className="rounded-md px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100">Home</Link>
          <h1 className="text-lg font-semibold">Recipes</h1>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6">
        {/* Tags filter row */}
        <div className="mb-6 overflow-x-auto tag-scroll">
          <div className="flex items-center gap-2 min-w-max">
            <button
              onClick={() => apply({ tag: null })}
              className={`whitespace-nowrap rounded-full border px-3 py-1 text-sm ${!tag ? 'bg-black text-white border-black' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            >
              All
            </button>
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => apply({ tag: t })}
                className={`whitespace-nowrap rounded-full border px-3 py-1 text-sm ${tag === t ? 'bg-black text-white border-black' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {error && (
          <div className="mb-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading &&
            Array.from({ length: PAGE_SIZE }).map((_, idx) => (
              <div key={idx} className="h-48 rounded-lg border bg-white animate-pulse" />
            ))}

          {!loading && data?.recipes.map((r) => (
            <article key={r.id} className="overflow-hidden rounded-lg border bg-white">
              <img src={r.image} alt={r.name} className="h-40 w-full object-cover" />
              <div className="p-3">
                <h3 className="text-sm font-semibold line-clamp-1">{r.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{r.cuisine} • ⭐ {r.rating}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {r.tags.slice(0, 3).map((t) => (
                    <span key={t} className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] text-gray-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex items-center justify-between">
          <button
            className="rounded-md border bg-white px-3 py-1.5 text-sm text-gray-700 disabled:opacity-50"
            onClick={() => apply({ page: Math.max(1, page - 1) })}
            disabled={page <= 1 || loading}
          >
            Prev
          </button>
          <div className="text-sm text-gray-600">Page {page} of {totalPages}</div>
          <button
            className="rounded-md border bg-white px-3 py-1.5 text-sm text-gray-700 disabled:opacity-50"
            onClick={() => apply({ page: Math.min(totalPages, page + 1) })}
            disabled={page >= totalPages || loading}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  )
}