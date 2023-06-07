import React, { FC } from 'react';
import { RouterProvider } from './providers/RouterProvider';
import './styles/global.css';
import { StoreProvider } from './providers/StoreProvider';
import { PortalsProvider } from './providers/PortalsProvider';

export const App: FC = () => (
  <StoreProvider>
    <PortalsProvider>
      <RouterProvider />
    </PortalsProvider>
  </StoreProvider>
);

export default App;
