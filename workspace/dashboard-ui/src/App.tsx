import React, { Suspense, lazy } from 'react'
import { BrowserRouter } from 'react-router-dom'

const MainRoutes = lazy(() => import('./pages'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="p-4">Loading...</div>}>
        <MainRoutes />
      </Suspense>
    </BrowserRouter>
  )
}

export default React.memo(App)
