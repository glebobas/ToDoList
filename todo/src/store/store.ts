import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../entities/rootReducer';
import { baseApi } from '../shared/api/rtk/baseApi';

type config_store = {
    reducer:any,
    middleware:any
}
export const store = configureStore ({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware: () => any[]) => getDefaultMiddleware().concat(baseApi.middleware),
} as config_store)