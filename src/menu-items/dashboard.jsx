// assets
import { DashboardOutlined, UserAddOutlined, FileAddOutlined, SyncOutlined, DollarCircleOutlined, BarChartOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  UserAddOutlined,
  FileAddOutlined,
  SyncOutlined,
  DollarCircleOutlined,
  BarChartOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'onboarding',
      title: 'Client Onboarding',
      type: 'item',
      url: '/onboarding',
      icon: icons.UserAddOutlined,
      breadcrumbs: false
    },
    {
      id: 'employee-setup',
      title: 'Employee Setup',
      type: 'item',
      url: '/employee-setup',
      icon: icons.FileAddOutlined,
      breadcrumbs: false
    },
    {
      id: 'payroll-setup',
      title: 'Payroll Setup',
      type: 'item',
      url: '/payroll-setup',
      icon: icons.DollarCircleOutlined,
      breadcrumbs: false
    },
    {
      id: 'parallel-run',
      title: 'Parallel Run',
      type: 'item',
      url: '/parallel-run',
      icon: icons.SyncOutlined,
      breadcrumbs: false
    },
    {
      id: 'salary-update',
      title: 'Salary Update',
      type: 'item',
      url: '/salary-update',
      icon: icons.DollarCircleOutlined,
      breadcrumbs: false
    },
    {
      id: 'reports',
      title: 'Reports',
      type: 'item',
      url: '/reports',
      icon: icons.BarChartOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
