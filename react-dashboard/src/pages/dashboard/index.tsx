import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <Outlet />
    </div>
  )
}

export default React.memo(Dashboard)