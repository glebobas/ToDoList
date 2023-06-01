import { combineReducers } from '@reduxjs/toolkit';

import { baseApi } from '../shared/api/rtk/baseApi';

type State = {
  [baseApi.reducerPath]: any;
};

export const rootReducer = combineReducers<State>({
  [baseApi.reducerPath]: baseApi.reducer,
});
