import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen grid grid-rows-[56px_1fr]">
      <header className="flex items-center px-4 border-b bg-white"> 
        <h1 className="text-xl font-semibold">Header</h1>
      </header>
      <main className="bg-white">
        <Outlet />
      </main>
    </div>
  )
}

export default React.memo(Layout)