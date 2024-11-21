import {
  createAsyncThunk,
  createSlice,
  SerializedError,
} from "@reduxjs/toolkit";
import todoService from "../../services/todoService";
import TodoType from "../../types/Todo.type";
import sliceName from "../sliceName.state";
import { RootState } from "../store";

interface TodosState {
  isFetchingFirst: boolean;
  isFetching: boolean;
  data: TodoType[];
  error?: SerializedError | null;
}

const initialState: TodosState = {
  isFetchingFirst: true,
  isFetching: false,
  data: [],
  error: null,
};

const getTodos = createAsyncThunk(sliceName.todos, async () => {
  return todoService.getTodos();
});

const todosStates = (state: RootState) => state[sliceName.todos];

const todosSlice = createSlice({
  name: sliceName.todos,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.isFetching = false;
        state.isFetchingFirst = false;
        state.data = action.payload.data;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.error;
      });
  },
});

export { getTodos, todosStates };
export default todosSlice.reducer;
