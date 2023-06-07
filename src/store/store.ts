import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../entities/rootReducer';
import { baseApi } from '../shared/api/rtk/baseApi';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [baseApi.reducerPath],
};

type config_store = {
  reducer: any;
  middleware: any;
};
export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (
    getDefaultMiddleware: (arg0: {
      serializableCheck: {
        ignoredActions: (
          | 'persist/FLUSH'
          | 'persist/REHYDRATE'
          | 'persist/PAUSE'
          | 'persist/PERSIST'
          | 'persist/PURGE'
          | 'persist/REGISTER'
        )[];
      };
    }) => any[]
  ) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
} as config_store);

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

