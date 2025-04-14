import { lazy } from 'react';

// export const HomeAsync = lazy(() => import('./Home'));

export const MotoAsync = lazy(() => new Promise(res => {
    setTimeout(() => res(import('./Moto')), 1500)
}));

