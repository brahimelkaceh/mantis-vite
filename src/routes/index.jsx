import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// project import
import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';
import ComponentsRoutes from './ComponentsRoutes';

import SimpleLayout from 'layout/Simple';
import Loadable from 'components/Loadable';

import { SimpleLayoutType } from 'config';
import DashboardLayout from 'layout/Dashboard';

// render - landing page
const PagesLanding = Loadable(lazy(() => import('pages/production/dashboard')));

// ==============================|| ROUTING RENDER ||============================== //

const router = createBrowserRouter(
  [
    {
      path: '/',
      // path: '/production/dashboard',
      element: <DashboardLayout layout={SimpleLayoutType.LANDING} />,
      children: [
        {
          index: true,
          element: <PagesLanding />
        }
      ]
    },
    LoginRoutes,
    ComponentsRoutes,
    MainRoutes
  ],
  { basename: import.meta.env.VITE_APP_BASE_NAME }
);

export default router;
