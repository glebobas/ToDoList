import React, { FC } from 'react';
import { RouterProvider } from './providers/RouterProvider';
import './styles/global.css';
import { StoreProvider } from './providers/StoreProvider';

export const App: FC = () => (
  <StoreProvider>
    <RouterProvider />
  </StoreProvider>
);

export default App;
