import { lazy } from 'react';

// export const HomeAsync = lazy(() => import('./Home'));

export const NotFoundPageAsync = lazy(() => new Promise(res => {
    setTimeout(() => res(import('./NotFoundPage')), 1500)
}));

