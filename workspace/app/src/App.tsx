import { Link, Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b">
        <div className="max-w-3xl mx-auto flex items-center gap-4 p-4">
          <Link to="/" className="font-semibold">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-black">About</Link>
        </div>
      </nav>
      <main className="py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Outlet />
      </main>
    </div>
  )
}
