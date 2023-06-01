import React, { FC } from 'react';
import { RouterProvider } from './providers/RouterProvider';
import './styles/global.css';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../store';

export const App: FC = () => (
  <ReduxProvider store={store}>
    <RouterProvider />
  </ReduxProvider>
);

export default App;
