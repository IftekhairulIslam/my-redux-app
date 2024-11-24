import { createSlice } from "@reduxjs/toolkit";
import sliceName from "../sliceName.state";
import { RootState } from "../store";

export interface PostFilters {
  limit: number;
  page: number;
}

const initialState: PostFilters = {
  limit: 10,
  page: 1,
};

const postFiltersSlice = createSlice({
  name: sliceName.postFilters,
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

export const selectPostFilters = (state: RootState) =>
  state[sliceName.postFilters];
export const { setLimit, setPage } = postFiltersSlice.actions;
export default postFiltersSlice.reducer;
