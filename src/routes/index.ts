import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';

import asyncComponentLoader from '@/utils/loader';

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.Welcome]: {
    component: asyncComponentLoader(() => import('@/pages/Welcome')),
    path: '/',
    title: 'Welcome',
    icon: HomeIcon,
  },
  [Pages.Page]: {
    component: asyncComponentLoader(() => import('@/pages/Page')),
    path: '/page/*',
    title: 'Page',
    icon: GitHubIcon,
  },
  // [Pages.Strapi]: {
  //   component: asyncComponentLoader(() => import('@/pages/Strapi')),
  //   path: '/strapi/*',
  //   title: 'Strapi',
  //   icon: GitHubIcon,
  // },
  [Pages.Postgraphile]: {
    component: asyncComponentLoader(() => import('@/pages/Postgraphile')),
    path: '/postgraphile/*',
    title: 'Postgraphile',
    icon: GitHubIcon,
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/pages/NotFound')),
    path: '*',
  },
};

export default routes;
