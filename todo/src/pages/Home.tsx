import type { FC } from 'react';
import React from 'react';
import { addTodoAlert } from '../components/Portals/portal.slice';
import {
  useAddTodoMutation,
} from '../entities/list/list.api';
import { Input } from '../components/ui/Input';
import { FormikWrapper } from '../components/shared/FormikWrapper/FormikWrapper';
import { initialValues, basicSchema } from './Form.const';
import { List } from '../features/List/List';
import { useAppDispatch } from '../store';


const HomePage: FC = () => {
  const [addTodo] = useAddTodoMutation();
  const dispatch = useAppDispatch()
  const openAlert = () => {
    dispatch(addTodoAlert({ open: true, props: { text: 'Запись успешно добавлена', mode: null } }));
  };
  const onSubmit = async (form: any) => {
    try {
      await addTodo(form).unwrap();
      openAlert()
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
      <List />
    </div>
  );
};

export default HomePage;
