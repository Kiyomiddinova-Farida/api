import React, { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

const Layout = lazy(() => import('../layout'))
const DashboardLayout = lazy(() => import('../layout/DashboardLayout'))
const Home = lazy(() => import('./home'))
const About = lazy(() => import('./about'))
const Login = lazy(() => import('./login'))
const Auth = lazy(() => import('../layout/Auth'))

const Dashboard = lazy(() => import('./dashboard'))
const Statistics = lazy(() => import('./dashboard/statistics'))
const Teacher = lazy(() => import('./dashboard/teacher'))

const Student = lazy(() => import('./dashboard/student'))
const StudentActive = lazy(() => import('./dashboard/student/active'))
const StudentArchive = lazy(() => import('./dashboard/student/archive'))
const StudentDeleted = lazy(() => import('./dashboard/student/deleted'))

const Page4 = lazy(() => import('./dashboard/page-4'))
const Page5 = lazy(() => import('./dashboard/page-5'))
const Page6 = lazy(() => import('./dashboard/page-6'))
const Page7 = lazy(() => import('./dashboard/page-7'))
const Page8 = lazy(() => import('./dashboard/page-8'))
const Page9 = lazy(() => import('./dashboard/page-9'))
const Page10 = lazy(() => import('./dashboard/page-10'))

const MainRouters = () => {
  return (
    <Suspense fallback={<div className="p-4">Loading...</div>}>
      {useRoutes([
        {
          path: '/',
          element: <Layout />,
          children: [
            { index: true, element: <Home /> },
            { path: 'about', element: <About /> },
            { path: '*', element: <div className="p-4">404</div> },
          ],
        },
        { path: '/login', element: <Login /> },
        {
          path: '/',
          element: <Auth />,
          children: [
            {
              path: 'dashboard',
              element: <DashboardLayout />,
              children: [
                {
                  element: <Dashboard />,
                  children: [
                    { index: true, element: <Statistics /> },
                    { path: 'teacher', element: <Teacher /> },
                    { path: 'page-4', element: <Page4 /> },
                    { path: 'page-5', element: <Page5 /> },
                    { path: 'page-6', element: <Page6 /> },
                    { path: 'page-7', element: <Page7 /> },
                    { path: 'page-8', element: <Page8 /> },
                    { path: 'page-9', element: <Page9 /> },
                    { path: 'page-10', element: <Page10 /> },
                    {
                      path: 'student',
                      element: <Student />,
                      children: [
                        { index: true, element: <StudentActive /> },
                        {
                          path: 'archive',
                          element: <StudentArchive />,
                          children: [
                            { index: true, element: <div className="p-4">Tashkent</div> },
                            { path: 'samarkand', element: <div className="p-4">Samarqand</div> },
                          ],
                        },
                        { path: 'deleted', element: <StudentDeleted /> },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ])}
    </Suspense>
  )
}

export default React.memo(MainRouters)