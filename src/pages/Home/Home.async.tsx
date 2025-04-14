import { lazy } from 'react';

// export const HomeAsync = lazy(() => import('./Home'));

export const HomeAsync = lazy(() => new Promise(res => {
    setTimeout(() => res(import('./Home')), 1500)
}));

