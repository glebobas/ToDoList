import type { FC } from 'react';
import React from 'react';
import {
  useGetTodosQuery,
  useDeleteTodoMutation,
  useDoneTodoMutation,
  useAddTodoMutation,
} from '../entities/list/list.api';
import { Input } from '../components/ui/Input';
import { FormikWrapper } from '../components/shared/FormikWrapper/FormikWrapper';
import { initialValues, basicSchema } from './Form.const';

const HomePage: FC = () => {
  const { data = [] } = useGetTodosQuery([]);
  const [deleteToDo] = useDeleteTodoMutation();
  const [doneTodo] = useDoneTodoMutation();
  const [addTodo] = useAddTodoMutation();

  const deleteTodoHandler = (todoId: number) => async () => {
    try {
      await deleteToDo(todoId).unwrap();
    } catch (error: any) {}
  };
  const updateHandler = (todoId: number) => async () => {
    const body = {
      status: true,
    };
    try {
      await doneTodo({ todoId, body }).unwrap();
      setTimeout(async () => {
        await deleteTodoHandler(todoId);
      }, 2000);
    } catch (error: any) {}
  };
  const onSubmit = async (form: any) => {
    
    try {
      await addTodo(form).unwrap();
    } catch (error) {}
  };

  return (
    <div>
      <div className="text-center text-2xl font-bold">ToDo</div>
      <div className="w-[85%] ml-auto mr-auto">
        <FormikWrapper
          onSubmit={(form: any) => onSubmit(form)}
          initialValues={initialValues}
          validationSchema={basicSchema}
        >
          {(getFieldProps, errors) => (

            <Input errors={errors} id="name" type="name" {...getFieldProps('name')}>
              <button
                type="submit"
                className="mr-5"
                onSubmit={(form: any) => onSubmit(form)}
              >
                <img
                  className="h-[25px] w-[25px]"
                  src="https://cdn-icons-png.flaticon.com/512/18/18659.png"
                  alt=""
                />
              </button>
            </Input>
          )}
        </FormikWrapper>
      </div>

      <div className="flex text-center justify-center">
        <ul className="mt-20">
          {data.map((todo: any) => (
            <li
              className=" flex mb-7 items-center justify-between text-xl italic"
              key={todo.id}
            >
              <input
                onClick={updateHandler(todo.id)}
                className="mr-5 cursor-pointer"
                type="checkbox"
                id="horns"
                name="horns"
              />
              <span>{todo.name}</span>{' '}
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
    </div>
  );
};

export default HomePage;
