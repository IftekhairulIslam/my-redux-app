import { createSlice } from "@reduxjs/toolkit";
import sliceName from "../sliceName.state";
import { RootState } from "../store";

export interface TodoFilters {
  limit: number;
  page: number;
}

const initialState: TodoFilters = {
  limit: 10,
  page: 1,
};

const todoFiltersSlice = createSlice({
  name: sliceName.todoFilters,
  initialState,
  reducers: {
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const selectTodoFilters = (state: RootState) =>
  state[sliceName.todoFilters];
export const { setLimit, setPage } = todoFiltersSlice.actions;
export default todoFiltersSlice.reducer;
