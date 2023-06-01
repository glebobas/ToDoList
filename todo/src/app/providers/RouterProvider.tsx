import type { FC } from 'react';
import React, { Suspense } from 'react';
import { RouterProvider as ReactRouterProvider } from 'react-router-dom';
import { appRouter } from '../../pages/index';

export const RouterProvider: FC = () => (
    <Suspense>
        <ReactRouterProvider router={appRouter} />
    </Suspense>
)