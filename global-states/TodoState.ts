import {createSlice} from '@reduxjs/toolkit';
import Todo from '../models/Todo.model';
export const initialStateValue: Todo[] = [];

const CreateTodoSlice = createSlice({
  name: 'createTodo',
  initialState: {
    todo: initialStateValue,
  },
  reducers: {
    createTodo: (state, action) => {
      console.log('success');
      console.log(state.todo);
      console.log(action.payload);
      state.todo.push(action.payload);
    },
    editTodo: (state, action) => {
      let index: number = 0;
      console.log('edit');
      console.log(action.payload.id - 1);
      console.log(action.payload);
      state.todo.map(Item => {
        console.log('map');
        console.log(Item);
        if (Item.id === action.payload.id) {
          index = state.todo.indexOf(Item);
        }
      });
      state.todo[index] = action.payload;
    },
    deleteTodo: (state, action) => {
      console.log(action.payload.id);
      state.todo = state.todo.filter(todo => todo.id !== action.payload.id);
      console.log('complete');
      console.log(state.todo);
    },
  },
});

export const {createTodo} = CreateTodoSlice.actions;
export const {editTodo} = CreateTodoSlice.actions;
export const {deleteTodo} = CreateTodoSlice.actions;
export default CreateTodoSlice.reducer;
