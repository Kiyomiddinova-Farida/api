import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-dvh bg-gray-50">
      <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold">Recipes</h1>
          <nav className="text-sm text-gray-600">
            <Link to="/recipes" className="rounded-md bg-black text-white px-3 py-1.5 hover:bg-gray-800">
              Open Recipes
            </Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-10">
        <p className="text-gray-700">Simple React + Vite + TypeScript + Tailwind UI.</p>
      </main>
    </div>
  )
}

export default App
