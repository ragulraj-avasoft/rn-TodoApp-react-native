import {createSlice} from '@reduxjs/toolkit';
import Todo from '../models/Todo.model';
export const initialStateValue: Todo[] = [];

const TodoSlice = createSlice({
  name: 'createTodo',
  initialState: {
    todo: initialStateValue,
  },
  reducers: {
    createTodo: (state, action) => {
      state.todo.push(action.payload);
    },
    editTodo: (state, action) => {
      let index: number = 0;
      state.todo.map(Item => {
        if (Item.id === action.payload.id) {
          index = state.todo.indexOf(Item);
        }
      });
      state.todo[index] = action.payload;
    },
    deleteTodo: (state, action) => {
      state.todo = state.todo.filter(todo => todo.id !== action.payload.id);
    },
  },
});

export const {createTodo,editTodo,deleteTodo} = TodoSlice.actions;
export default TodoSlice.reducer;
