
import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const HomePage = lazy(() => import('./Home'));
const Header = lazy(() => import('../components/layouts/Header'));

export enum Pages {
  Home = '/',
}

export const appRouter = createBrowserRouter([
  {
    path: '/' ,
    element: <Header />,
    children: [
      {
        path: Pages.Home,
        element: <HomePage />,
      },
    ],
  },
]);
