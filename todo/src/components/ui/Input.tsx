import { FC } from "react"
import { InputTypeProps } from "./Input.type"

export const Input: FC<InputTypeProps> = ({
  type,
  name,
  onChange,
  value,
  id,
  onClick
}) => {
    return (
      <div>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          </div>
          <input
            id={id}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="add todo"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="currency" className="sr-only">
              add
            </label>
            <button type="button" onClick={onClick} className="mr-5"><img className="h-[25px] w-[25px]" src="https://cdn-icons-png.flaticon.com/512/18/18659.png" alt="" /></button>
          </div>
        </div>
      </div>
    )
  }