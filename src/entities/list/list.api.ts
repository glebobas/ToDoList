import { baseApi } from '../../shared/api/rtk/baseApi';
import { BASE_API_TAG } from '../../shared/api/rtk/tags';
import { EditTodoType } from './todos.types';

interface Post {
  id: number
  name: string
  status: boolean
}


export const listApi = baseApi
  .enhanceEndpoints({ addTagTypes: [BASE_API_TAG] })
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
      doneTodo: build.mutation<Post, EditTodoType>({
        query: ({ todoId, body }) => ({
          url: `todos/${todoId}`,
          method: 'PATCH',
          body: body,
        }),
        invalidatesTags: [BASE_API_TAG],
      }),
    }),
  });

export const { useGetTodosQuery, useDeleteTodoMutation, useDoneTodoMutation, useAddTodoMutation } = listApi;
