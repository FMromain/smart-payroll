import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';

// Lazy load the new pages
const ClientOnboarding = Loadable(lazy(() => import('pages/ClientOnboarding')));
const EmployeeSetup = Loadable(lazy(() => import('pages/EmployeeSetup')));
const PayrollSetup = Loadable(lazy(() => import('pages/PayrollSetup')));
const ParallelRun = Loadable(lazy(() => import('pages/ParallelRun')));
const SalaryUpdate = Loadable(lazy(() => import('pages/SalaryUpdate')));
const Reports = Loadable(lazy(() => import('pages/Reports')));

// Existing routes (for reference)
const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <Dashboard />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    // New routes for the Payroll Smart App
    {
      path: 'onboarding',
      element: <ClientOnboarding />
    },
    {
      path: 'employee-setup',
      element: <EmployeeSetup />
    },
    {
      path: 'payroll-setup',
      element: <PayrollSetup />
    },
    {
      path: 'parallel-run',
      element: <ParallelRun />
    },
    {
      path: 'salary-update',
      element: <SalaryUpdate />
    },
    {
      path: 'reports',
      element: <Reports />
    },
    // Existing sample pages (for reference)
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'typography',
      element: <Typography />
    }
  ]
};

export default MainRoutes;
