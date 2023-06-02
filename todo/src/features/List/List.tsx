import clsx from 'clsx'
import { FC } from 'react';
import {
    useGetTodosQuery,
    useDeleteTodoMutation,
    useDoneTodoMutation,
  } from '../../entities/list/list.api';

export const List: FC = () => {
    const { data = [] } = useGetTodosQuery([]);
    const [doneTodo] = useDoneTodoMutation();
    const [deleteToDo] = useDeleteTodoMutation();
    const deleteTodoHandler = (todoId: number) => async () => {
        try {
          await deleteToDo(todoId).unwrap();
        } catch (error: any) {}
      };
    const updateHandler = (todoId: number, todoStatus: boolean) => async () => {
        const body = {
          status: !todoStatus,
        };
        try {
          await doneTodo({ todoId, body }).unwrap();
          setTimeout(async () => {
            await deleteTodoHandler(todoId);
          }, 2000);
        } catch (error: any) {}
      };
    return (
        <div className="flex text-center justify-center">
        <ul className="mt-20">
          {data.map((todo: any) => (
            <li
              className=" flex mb-7 items-center justify-between text-xl italic"
              key={todo.id}
            >
              <input
                onClick={updateHandler(todo.id, todo.status)}
                className="mr-5 cursor-pointer"
                type="checkbox"
                id="horns"
                name="horns"
                defaultChecked={!todo.status ? true : false}
              />
              <span className={clsx(!todo.status ? 'text-gray-400' : 'text-gray-800')}>{todo.name}</span>{' '}
              <button type="button" onClick={deleteTodoHandler(todo.id)}>
                <img
                  className="ml-5 h-[15px] w-[15px]"
                  src="https://cdn-icons-png.flaticon.com/512/61/61155.png"
                  alt=""
                />
              </button>{' '}
            </li>
          ))}
        </ul>
      </div>
    )
}