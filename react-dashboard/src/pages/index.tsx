import React, { lazy, Suspense } from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
import Loader from '../components/Loader'

// code splitting | lazy load | Suspense
const Layout = lazy(() => import('../layout/Layout'))
const Login = lazy(() => import('./login'))
const Auth = lazy(() => import('./auth'))

const Dashboard = lazy(() => import('./dashboard'))
const Overview = lazy(() => import('./dashboard/overview'))
const Analytics = lazy(() => import('./dashboard/analytics'))
const Users = lazy(() => import('./dashboard/users'))
const Products = lazy(() => import('./dashboard/products'))
const Orders = lazy(() => import('./dashboard/orders'))
const Messages = lazy(() => import('./dashboard/messages'))
const Settings = lazy(() => import('./dashboard/settings'))
const Billing = lazy(() => import('./dashboard/billing'))
const Reports = lazy(() => import('./dashboard/reports'))
const Support = lazy(() => import('./dashboard/support'))

// Users tabs
const UsersActive = lazy(() => import('./dashboard/users/active'))
const UsersArchived = lazy(() => import('./dashboard/users/archived'))
const UsersDeleted = lazy(() => import('./dashboard/users/deleted'))

// Products tabs
const ProductsList = lazy(() => import('./dashboard/products/list'))
const ProductsCategories = lazy(() => import('./dashboard/products/categories'))
const ProductsInventory = lazy(() => import('./dashboard/products/inventory'))

// Orders tabs
const OrdersPending = lazy(() => import('./dashboard/orders/pending'))
const OrdersCompleted = lazy(() => import('./dashboard/orders/completed'))
const OrdersCancelled = lazy(() => import('./dashboard/orders/cancelled'))

// Messages tabs
const MessagesInbox = lazy(() => import('./dashboard/messages/inbox'))
const MessagesSent = lazy(() => import('./dashboard/messages/sent'))
const MessagesArchived = lazy(() => import('./dashboard/messages/archived'))

// Settings tabs
const SettingsProfile = lazy(() => import('./dashboard/settings/profile'))
const SettingsPreferences = lazy(() => import('./dashboard/settings/preferences'))

// Billing tabs
const BillingInvoices = lazy(() => import('./dashboard/billing/invoices'))
const BillingSubscriptions = lazy(() => import('./dashboard/billing/subscriptions'))

// Reports tabs
const ReportsSales = lazy(() => import('./dashboard/reports/sales'))
const ReportsTraffic = lazy(() => import('./dashboard/reports/traffic'))

// Support tabs
const SupportTickets = lazy(() => import('./dashboard/support/tickets'))
const SupportFaq = lazy(() => import('./dashboard/support/faq'))

// Overview tabs
const OverviewSummary = lazy(() => import('./dashboard/overview/summary'))
const OverviewActivity = lazy(() => import('./dashboard/overview/activity'))

// Analytics tabs
const AnalyticsTraffic = lazy(() => import('./dashboard/analytics/traffic'))
const AnalyticsConversions = lazy(() => import('./dashboard/analytics/conversions'))

const MainRouters = () => {
  return (
    <Suspense fallback={<Loader />}>
      {useRoutes([
        {
          path: '/',
          element: <Layout />,
          children: [
            { index: true, element: <Navigate to="/dashboard" replace /> },
            { path: '*', element: <div className="p-6">404</div> },
          ],
        },
        { path: '/login', element: <Login /> },
        {
          path: '/',
          element: <Auth />,
          children: [
            {
              path: 'dashboard',
              element: <Dashboard />,
              children: [
                { index: true, element: <Overview /> },
                {
                  path: 'overview',
                  element: <Overview />,
                  children: [
                    { index: true, element: <OverviewSummary /> },
                    { path: 'activity', element: <OverviewActivity /> },
                  ],
                },
                {
                  path: 'analytics',
                  element: <Analytics />,
                  children: [
                    { index: true, element: <AnalyticsTraffic /> },
                    { path: 'conversions', element: <AnalyticsConversions /> },
                  ],
                },
                {
                  path: 'users',
                  element: <Users />,
                  children: [
                    { index: true, element: <UsersActive /> },
                    { path: 'archived', element: <UsersArchived /> },
                    { path: 'deleted', element: <UsersDeleted /> },
                  ],
                },
                {
                  path: 'products',
                  element: <Products />,
                  children: [
                    { index: true, element: <ProductsList /> },
                    { path: 'categories', element: <ProductsCategories /> },
                    { path: 'inventory', element: <ProductsInventory /> },
                  ],
                },
                {
                  path: 'orders',
                  element: <Orders />,
                  children: [
                    { index: true, element: <OrdersPending /> },
                    { path: 'completed', element: <OrdersCompleted /> },
                    { path: 'cancelled', element: <OrdersCancelled /> },
                  ],
                },
                {
                  path: 'messages',
                  element: <Messages />,
                  children: [
                    { index: true, element: <MessagesInbox /> },
                    { path: 'sent', element: <MessagesSent /> },
                    { path: 'archived', element: <MessagesArchived /> },
                  ],
                },
                {
                  path: 'settings',
                  element: <Settings />,
                  children: [
                    { index: true, element: <SettingsProfile /> },
                    { path: 'preferences', element: <SettingsPreferences /> },
                  ],
                },
                {
                  path: 'billing',
                  element: <Billing />,
                  children: [
                    { index: true, element: <BillingInvoices /> },
                    { path: 'subscriptions', element: <BillingSubscriptions /> },
                  ],
                },
                {
                  path: 'reports',
                  element: <Reports />,
                  children: [
                    { index: true, element: <ReportsSales /> },
                    { path: 'traffic', element: <ReportsTraffic /> },
                  ],
                },
                {
                  path: 'support',
                  element: <Support />,
                  children: [
                    { index: true, element: <SupportTickets /> },
                    { path: 'faq', element: <SupportFaq /> },
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