import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => { //This represents the current state of the slice that this action is affecting.
     //This argument represents the action object dispatched when calling this action creator. The action object typically includes a payload property, which contains the data needed to perform the action. In the case of addTodo, action.payload should contain the new todo item to be added.
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo,  removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
