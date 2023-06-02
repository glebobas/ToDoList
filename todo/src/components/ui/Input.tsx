import { FC } from 'react';
import { InputTypeProps } from './Input.type';
import clsx from 'clsx';

export const Input: FC<InputTypeProps> = ({
  type,
  name,
  onChange,
  value,
  id,
  children,
  errors,
}) => {
  return (
    <div>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className={clsx('opacity-0', errors && 'opacity-100')}>
          {errors.name}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>

        <input
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={clsx(
            'block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
            errors.name && 'ring-red-100 focus:ring-4 focus:ring-red-100'
          )}
          placeholder="add todo"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          {children}
        </div>
      </div>
    </div>
  );
};
