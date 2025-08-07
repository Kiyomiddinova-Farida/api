import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Student: React.FC = () => {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2 text-sm">
        <NavLink to="." end className={({ isActive }) => `px-3 py-1.5 rounded ${isActive ? 'bg-black text-white' : 'hover:bg-gray-100'}`}>Active</NavLink>
        <NavLink to="archive" className={({ isActive }) => `px-3 py-1.5 rounded ${isActive ? 'bg-black text-white' : 'hover:bg-gray-100'}`}>Archive</NavLink>
        <NavLink to="deleted" className={({ isActive }) => `px-3 py-1.5 rounded ${isActive ? 'bg-black text-white' : 'hover:bg-gray-100'}`}>Deleted</NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default React.memo(Student)