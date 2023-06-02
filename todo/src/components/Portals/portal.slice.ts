import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { addTodoTypes, portalPropsType } from './portal.types';

export type portalState = {
    AddTodo: addTodoTypes<portalPropsType>
}

const initialState: portalState  = {
    AddTodo: {
        open: false,
        props: {
            text: null,
            mode: null,
        }
    }
}

export const portalSlice = createSlice({
    name: 'portals',
    initialState,
    reducers: {
        addTodoAlert: (state, action: PayloadAction<addTodoTypes<portalPropsType>>) => {
            state.AddTodo = action.payload
        }
    }
}) 

export const {addTodoAlert} = portalSlice.actions