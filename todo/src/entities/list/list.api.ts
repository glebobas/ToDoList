import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseApi } from '../../shared/api/rtk/baseApi';
import { BASE_API_TAG } from '../../shared/api/rtk/tags';

export const listApi = baseApi
  .enhanceEndpoints({ addTagTypes: [BASE_API_TAG]})
  .injectEndpoints({
    endpoints: (build) => ({
      getTodos: build.query({
        query: () => ({
          url: `todos`,
        }),
        providesTags: [BASE_API_TAG],
      }),
      deleteTodo: build.mutation({
        query: (todoId) => ({
          url: `todos/${todoId}`,
          method: 'DELETE',
        }),
        invalidatesTags: [BASE_API_TAG],
      }),
      addTodo: build.mutation({
        query: (body) => ({
          url: `todos`,
          method: 'POST',
          body,
        }),
        invalidatesTags: [BASE_API_TAG],
      }),
    }),
  });

export const { useGetTodosQuery, useDeleteTodoMutation } = listApi;
