import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Dashboard: React.FC = () => {
  return (
    <div className="h-full grid grid-rows-[48px_1fr]">
      <div className="border-b flex items-center gap-2 px-3 text-sm">
        <NavLink to="." end className={({ isActive }) => `px-3 py-2 rounded ${isActive ? 'bg-black text-white' : 'hover:bg-gray-100'}`}>Statistics</NavLink>
        <NavLink to="teacher" className={({ isActive }) => `px-3 py-2 rounded ${isActive ? 'bg-black text-white' : 'hover:bg-gray-100'}`}>Teacher</NavLink>
        <NavLink to="student" className={({ isActive }) => `px-3 py-2 rounded ${isActive ? 'bg-black text-white' : 'hover:bg-gray-100'}`}>Student</NavLink>
        <NavLink to="page-4" className={({ isActive }) => `px-3 py-2 rounded ${isActive ? 'bg-black text-white' : 'hover:bg-gray-100'}`}>Page 4</NavLink>
        <NavLink to="page-5" className={({ isActive }) => `px-3 py-2 rounded ${isActive ? 'bg-black text-white' : 'hover:bg-gray-100'}`}>Page 5</NavLink>
        <NavLink to="page-6" className={({ isActive }) => `px-3 py-2 rounded ${isActive ? 'bg-black text-white' : 'hover:bg-gray-100'}`}>Page 6</NavLink>
        <NavLink to="page-7" className={({ isActive }) => `px-3 py-2 rounded ${isActive ? 'bg-black text-white' : 'hover:bg-gray-100'}`}>Page 7</NavLink>
        <NavLink to="page-8" className={({ isActive }) => `px-3 py-2 rounded ${isActive ? 'bg-black text-white' : 'hover:bg-gray-100'}`}>Page 8</NavLink>
        <NavLink to="page-9" className={({ isActive }) => `px-3 py-2 rounded ${isActive ? 'bg-black text-white' : 'hover:bg-gray-100'}`}>Page 9</NavLink>
        <NavLink to="page-10" className={({ isActive }) => `px-3 py-2 rounded ${isActive ? 'bg-black text-white' : 'hover:bg-gray-100'}`}>Page 10</NavLink>
      </div>
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  )
}

export default React.memo(Dashboard)