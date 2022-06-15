import {configureStore} from '@reduxjs/toolkit';
import CreateTodoSlice from '../global-states/TodoState';

export const Store = configureStore({
  reducer: {
    createTodo: CreateTodoSlice,
    editTodo: CreateTodoSlice,
    deleteTodo: CreateTodoSlice,
  },
});
export type RootState = ReturnType<typeof Store.getState>;

export default Store;
