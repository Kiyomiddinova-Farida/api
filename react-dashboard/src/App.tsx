import React, { Suspense } from 'react'
import Loader from './components/Loader'

const Pages = React.lazy(() => import('./pages'))

function App() {
  return (
    <Suspense fallback={<Loader message="Loading app..." />}>
      <Pages />
    </Suspense>
  )
}

export default React.memo(App)
