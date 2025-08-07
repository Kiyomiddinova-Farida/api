import React from 'react'
import { Outlet } from 'react-router-dom'

const Auth: React.FC = () => {
  // TODO: add auth guard logic here if needed
  return <Outlet />
}

export default React.memo(Auth)