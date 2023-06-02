import { FC, PropsWithChildren } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistedStore } from '../../store/index';

export const StoreProvider: FC<PropsWithChildren> = ({children}) => {
  return (
    <ReduxProvider store={store} >
        <PersistGate persistor={persistedStore}>
          {children}
        </PersistGate>
    </ReduxProvider>
  )
}