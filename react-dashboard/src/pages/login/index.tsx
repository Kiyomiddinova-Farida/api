import React from 'react'

const Login: React.FC = () => {
  return (
    <div className="mx-auto max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <p className="text-sm text-gray-600 dark:text-gray-300">This is a placeholder login page.</p>
    </div>
  )
}

export default React.memo(Login)