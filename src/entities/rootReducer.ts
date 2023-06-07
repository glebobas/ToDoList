import { combineReducers } from '@reduxjs/toolkit';

import { baseApi } from '../shared/api/rtk/baseApi';
import { portalSlice } from '../components/Portals/portal.slice';
import { portalState } from '../components/Portals/portal.slice';

type State = {
  [portalSlice.name]: portalState;
  [baseApi.reducerPath]: any;
};

export const rootReducer = combineReducers<State>({
  [portalSlice.name]: portalSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
});
