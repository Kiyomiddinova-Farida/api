import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const DashboardLayout: React.FC = () => {
  return (
    <div className="min-h-screen grid grid-cols-[240px_1fr] grid-rows-[56px_1fr]">
      <header className="col-span-2 flex items-center px-4 border-b bg-white"> 
        <h1 className="text-xl font-semibold">Dashboard</h1>
      </header>
      <aside className="border-r bg-gray-50 p-3 space-y-2">
        <nav className="flex flex-col gap-1 text-sm">
          <Link className="px-3 py-2 rounded hover:bg-gray-100" to="/dashboard">Statistics</Link>
          <Link className="px-3 py-2 rounded hover:bg-gray-100" to="/dashboard/teacher">Teacher</Link>
          <Link className="px-3 py-2 rounded hover:bg-gray-100" to="/dashboard/student">Student</Link>
          <Link className="px-3 py-2 rounded hover:bg-gray-100" to="/dashboard/page-4">Page 4</Link>
          <Link className="px-3 py-2 rounded hover:bg-gray-100" to="/dashboard/page-5">Page 5</Link>
          <Link className="px-3 py-2 rounded hover:bg-gray-100" to="/dashboard/page-6">Page 6</Link>
          <Link className="px-3 py-2 rounded hover:bg-gray-100" to="/dashboard/page-7">Page 7</Link>
          <Link className="px-3 py-2 rounded hover:bg-gray-100" to="/dashboard/page-8">Page 8</Link>
          <Link className="px-3 py-2 rounded hover:bg-gray-100" to="/dashboard/page-9">Page 9</Link>
          <Link className="px-3 py-2 rounded hover:bg-gray-100" to="/dashboard/page-10">Page 10</Link>
        </nav>
      </aside>
      <main className="bg-white">
        <Outlet />
      </main>
    </div>
  )
}

export default React.memo(DashboardLayout)