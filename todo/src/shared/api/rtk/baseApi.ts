import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { createApi } from '@reduxjs/toolkit/query/react';

import { CONFIG } from '../../config/index';


const baseQuery = fetchBaseQuery({
	baseUrl: CONFIG.BASE_API_URL,
});

export const baseApi = createApi({
	reducerPath: 'baseApi',
	baseQuery,
	endpoints: () => ({}),
});
