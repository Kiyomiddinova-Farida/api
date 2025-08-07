import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Reports: React.FC = () => {
  const tabs = [
    { to: '/dashboard/reports', label: 'Sales', end: true },
    { to: '/dashboard/reports/traffic', label: 'Traffic' },
  ]
  return (
    <div>
      <div className="border-b border-gray-200 dark:border-gray-700 mb-4">
        <nav className="flex gap-2">
          {tabs.map((t) => (
            <NavLink key={t.to} to={t.to} end={t.end as boolean | undefined} className={({ isActive }) => `px-3 py-2 text-sm rounded-t ${isActive ? 'bg-white dark:bg-gray-800 border border-b-transparent' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}>{t.label}</NavLink>
          ))}
        </nav>
      </div>
      <Outlet />
    </div>
  )
}

export default React.memo(Reports)