import type { FC } from 'react';
import React from 'react';
import { PortalWithState } from 'react-portal';
import { useAppDispatch, useAppSelector } from '../../store';
import { addTodoAlert } from './portal.slice';

export const AddTodoPortal: FC = () => {
  const dispatch = useAppDispatch();
  const closeAlert = () => {
    console.log(open)
    dispatch(addTodoAlert({ open: false, props: { text: null, mode: null } }));
  };
  // setTimeout(() => {
  //   closeAlert()
  // }, 5000)
const {AddTodo: open, props} = useAppSelector((state) => state.portals)
console.log(open)
  return (
    <PortalWithState>
      {() => (
        <div>
          {open.open && (
            <div className="absolute-center inset-x-[41%] inset-y-[20%] fixed z-50 bg-gray-500 rounded-md w-[250px] h-[70px] shadow-md">
              <div className='flex justify-between'>
                <span className='mt-4'>{open.props.text}</span>
                <button type="button" onClick={closeAlert}>
                <img
                  className="ml-5 h-[15px] w-[15px]"
                  src="https://cdn-icons-png.flaticon.com/512/61/61155.png"
                  alt=""
                />
              </button>
              </div>
            </div>
          )}
        </div>
      )}
    </PortalWithState>
  );
};
