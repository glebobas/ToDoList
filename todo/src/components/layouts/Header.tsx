import type { FC } from 'react';
import React from 'react';
import { Outlet } from 'react-router-dom';
// import { LogoIcon } from '../../shared/static';

const Header: FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center bg-red-100 h-[50px]">
        <div>
          <img className='h-10 w-10' src="https://m.media-amazon.com/images/I/41da3NERJ4L.png" alt='' />
        </div>
      </div>
      <Outlet />
    </div>
  );
};
export default Header;
