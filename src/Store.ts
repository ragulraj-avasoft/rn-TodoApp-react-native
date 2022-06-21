import {configureStore} from '@reduxjs/toolkit';
import TodoSlice from './global-states/TodoState';

export const Store = configureStore({
  reducer: {
    Todo:TodoSlice
  },
});
export type RootState = ReturnType<typeof Store.getState>;

export default Store;
