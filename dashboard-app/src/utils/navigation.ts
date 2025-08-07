import { lazy } from 'react';
import type { NavItem } from '../types';

// Lazy load all page components
const DashboardOverview = lazy(() => import('../pages/dashboard/subpages/Overview'));
const DashboardStats = lazy(() => import('../pages/dashboard/subpages/Stats'));
const DashboardCharts = lazy(() => import('../pages/dashboard/subpages/Charts'));

const AnalyticsReports = lazy(() => import('../pages/analytics/subpages/Reports'));
const AnalyticsMetrics = lazy(() => import('../pages/analytics/subpages/Metrics'));
const AnalyticsInsights = lazy(() => import('../pages/analytics/subpages/Insights'));

const UsersManagement = lazy(() => import('../pages/users/subpages/Management'));
const UsersRoles = lazy(() => import('../pages/users/subpages/Roles'));
const UsersPermissions = lazy(() => import('../pages/users/subpages/Permissions'));

const ProductsCatalog = lazy(() => import('../pages/products/subpages/Catalog'));
const ProductsInventory = lazy(() => import('../pages/products/subpages/Inventory'));
const ProductsCategories = lazy(() => import('../pages/products/subpages/Categories'));

const OrdersList = lazy(() => import('../pages/orders/subpages/List'));
const OrdersTracking = lazy(() => import('../pages/orders/subpages/Tracking'));
const OrdersHistory = lazy(() => import('../pages/orders/subpages/History'));

const ReportsGeneral = lazy(() => import('../pages/reports/subpages/General'));
const ReportsFinancial = lazy(() => import('../pages/reports/subpages/Financial'));
const ReportsCustom = lazy(() => import('../pages/reports/subpages/Custom'));

const SettingsGeneral = lazy(() => import('../pages/settings/subpages/General'));
const SettingsSecurity = lazy(() => import('../pages/settings/subpages/Security'));
const SettingsIntegrations = lazy(() => import('../pages/settings/subpages/Integrations'));

const NotificationsInbox = lazy(() => import('../pages/notifications/subpages/Inbox'));
const NotificationsSettings = lazy(() => import('../pages/notifications/subpages/Settings'));
const NotificationsHistory = lazy(() => import('../pages/notifications/subpages/History'));

const CalendarEvents = lazy(() => import('../pages/calendar/subpages/Events'));
const CalendarSchedule = lazy(() => import('../pages/calendar/subpages/Schedule'));
const CalendarReminders = lazy(() => import('../pages/calendar/subpages/Reminders'));

const HelpDocumentation = lazy(() => import('../pages/help/subpages/Documentation'));
const HelpSupport = lazy(() => import('../pages/help/subpages/Support'));
const HelpFAQ = lazy(() => import('../pages/help/subpages/FAQ'));

export const navigationItems: NavItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'LayoutDashboard',
    path: '/dashboard',
    subPages: [
      { id: 'overview', label: 'Overview', path: '/dashboard/overview', component: DashboardOverview },
      { id: 'stats', label: 'Statistics', path: '/dashboard/stats', component: DashboardStats },
      { id: 'charts', label: 'Charts', path: '/dashboard/charts', component: DashboardCharts },
    ]
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: 'BarChart3',
    path: '/analytics',
    subPages: [
      { id: 'reports', label: 'Reports', path: '/analytics/reports', component: AnalyticsReports },
      { id: 'metrics', label: 'Metrics', path: '/analytics/metrics', component: AnalyticsMetrics },
      { id: 'insights', label: 'Insights', path: '/analytics/insights', component: AnalyticsInsights },
    ]
  },
  {
    id: 'users',
    label: 'Users',
    icon: 'Users',
    path: '/users',
    subPages: [
      { id: 'management', label: 'Management', path: '/users/management', component: UsersManagement },
      { id: 'roles', label: 'Roles', path: '/users/roles', component: UsersRoles },
      { id: 'permissions', label: 'Permissions', path: '/users/permissions', component: UsersPermissions },
    ]
  },
  {
    id: 'products',
    label: 'Products',
    icon: 'Package',
    path: '/products',
    subPages: [
      { id: 'catalog', label: 'Catalog', path: '/products/catalog', component: ProductsCatalog },
      { id: 'inventory', label: 'Inventory', path: '/products/inventory', component: ProductsInventory },
      { id: 'categories', label: 'Categories', path: '/products/categories', component: ProductsCategories },
    ]
  },
  {
    id: 'orders',
    label: 'Orders',
    icon: 'ShoppingCart',
    path: '/orders',
    subPages: [
      { id: 'list', label: 'Order List', path: '/orders/list', component: OrdersList },
      { id: 'tracking', label: 'Tracking', path: '/orders/tracking', component: OrdersTracking },
      { id: 'history', label: 'History', path: '/orders/history', component: OrdersHistory },
    ]
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: 'FileText',
    path: '/reports',
    subPages: [
      { id: 'general', label: 'General', path: '/reports/general', component: ReportsGeneral },
      { id: 'financial', label: 'Financial', path: '/reports/financial', component: ReportsFinancial },
      { id: 'custom', label: 'Custom', path: '/reports/custom', component: ReportsCustom },
    ]
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'Settings',
    path: '/settings',
    subPages: [
      { id: 'general', label: 'General', path: '/settings/general', component: SettingsGeneral },
      { id: 'security', label: 'Security', path: '/settings/security', component: SettingsSecurity },
      { id: 'integrations', label: 'Integrations', path: '/settings/integrations', component: SettingsIntegrations },
    ]
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: 'Bell',
    path: '/notifications',
    subPages: [
      { id: 'inbox', label: 'Inbox', path: '/notifications/inbox', component: NotificationsInbox },
      { id: 'settings', label: 'Settings', path: '/notifications/settings', component: NotificationsSettings },
      { id: 'history', label: 'History', path: '/notifications/history', component: NotificationsHistory },
    ]
  },
  {
    id: 'calendar',
    label: 'Calendar',
    icon: 'Calendar',
    path: '/calendar',
    subPages: [
      { id: 'events', label: 'Events', path: '/calendar/events', component: CalendarEvents },
      { id: 'schedule', label: 'Schedule', path: '/calendar/schedule', component: CalendarSchedule },
      { id: 'reminders', label: 'Reminders', path: '/calendar/reminders', component: CalendarReminders },
    ]
  },
  {
    id: 'help',
    label: 'Help',
    icon: 'HelpCircle',
    path: '/help',
    subPages: [
      { id: 'documentation', label: 'Documentation', path: '/help/documentation', component: HelpDocumentation },
      { id: 'support', label: 'Support', path: '/help/support', component: HelpSupport },
      { id: 'faq', label: 'FAQ', path: '/help/faq', component: HelpFAQ },
    ]
  },
];