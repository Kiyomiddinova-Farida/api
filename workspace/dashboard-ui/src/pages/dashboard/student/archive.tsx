import React from 'react'
import { Outlet } from 'react-router-dom'

const StudentArchive: React.FC = () => {
  return (
    <div>
      <div className="text-xl font-medium mb-4">Dashboard / Student / Archive</div>
      <Outlet />
    </div>
  )
}

export default React.memo(StudentArchive)