import type { FC } from 'react';
import React from 'react';
import { useGetTodosQuery, useDeleteTodoMutation } from '../entities/list/list.api';
import Input from '../components/ui/Input';

const HomePage: FC = () => {
  const { data = [] } = useGetTodosQuery([]);
  const [deleteToDo] = useDeleteTodoMutation()
  const deleteTodoHandler = (todoId: number) => async () => {
    try {
       await deleteToDo(todoId).unwrap()
	}
	catch (error:any) {

	}
  }
  return (
	<div>
		<div className='text-center text-2xl font-bold'>ToDo</div>
		<div className='w-[85%] ml-auto mr-auto'>
		<Input />
		</div>
	
<div className="flex text-center justify-center">
      <ul className="mt-20">
        {data.map((todo: any) => (
          <li className=" flex mb-7 items-center justify-between text-xl italic">
            <input className="mr-5 cursor-pointer" type="checkbox" id="horns" name="horns" />
            <span>{todo.name}</span> <button type="button" onClick={deleteTodoHandler(todo.id)}><img className='ml-5 h-[15px] w-[15px]' src='https://cdn-icons-png.flaticon.com/512/61/61155.png' alt='' /></button>{' '}
          </li>
        ))}
      </ul>
    </div>
	</div>
    
  );
};

export default HomePage;
