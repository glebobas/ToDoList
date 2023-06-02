import type { FC, PropsWithChildren } from 'react';
import React from 'react';
import { AddTodoPortal } from '../../components/Portals/AddTodo';

export const PortalsProvider: FC<PropsWithChildren> = ({ children }) => (
	<>
		<AddTodoPortal />
		{children}
	</>
);
