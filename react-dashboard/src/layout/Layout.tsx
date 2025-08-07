import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/dashboard/overview', label: 'Overview' },
  { to: '/dashboard/analytics', label: 'Analytics' },
  { to: '/dashboard/users', label: 'Users' },
  { to: '/dashboard/products', label: 'Products' },
  { to: '/dashboard/orders', label: 'Orders' },
  { to: '/dashboard/messages', label: 'Messages' },
  { to: '/dashboard/settings', label: 'Settings' },
  { to: '/dashboard/billing', label: 'Billing' },
  { to: '/dashboard/reports', label: 'Reports' },
  { to: '/dashboard/support', label: 'Support' },
]

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 shrink-0 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        <div className="p-4 text-xl font-bold">Dashboard</div>
        <nav className="px-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `block rounded px-3 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  isActive ? 'bg-gray-100 dark:bg-gray-700' : ''
                }`
              }
              end={false}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="flex-1">
        <header className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-700">
          <div className="px-6 py-3 font-semibold">React + Vite + TS + Tailwind</div>
        </header>
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default React.memo(Layout)