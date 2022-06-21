import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import Todo from '../models/Todo.model';

const TodoSlice = createSlice({
  name: 'Todo',
  initialState: {
    todo: [] as Todo[],
  },
  reducers: {
    createTodo: (state, action:PayloadAction<Todo>) => {
      console.log(action.payload)
      state.todo.push(action.payload);
    },
    editTodo: (state, action:PayloadAction<Todo>) => {
      state.todo = state.todo.map(todo => {
        if (todo.id === action.payload.id) {
          todo = action.payload;
        }
        return todo;
      });
    },
    deleteTodo: (state, action:PayloadAction<Todo>) => {
      state.todo = state.todo.filter(todo => todo.id !== action.payload.id);
    },
  },
});

export const {createTodo, editTodo, deleteTodo} = TodoSlice.actions;
export default TodoSlice.reducer;
