import { mount, lazy } from 'navi';

export const routes = mount({
  '/': lazy(() => import('./pages/Index') as any),
  '/about': lazy(() => import('./pages/About') as any)
});
