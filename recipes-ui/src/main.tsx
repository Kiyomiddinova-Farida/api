import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import RecipesPage from './pages/RecipesPage.tsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/recipes', element: <RecipesPage /> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
