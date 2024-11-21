import {
  createAsyncThunk,
  createSlice,
  SerializedError,
} from "@reduxjs/toolkit";
import todoService from "../../services/todoService";
import TodoType from "../../types/Todo.type";
import sliceName from "../sliceName.state";

interface TodosState {
  isFetching: boolean;
  data: TodoType[];
  error?: SerializedError | null;
}

const initialState: TodosState = {
  isFetching: false,
  data: [],
  error: null,
};

const getTodos = createAsyncThunk(sliceName.todos, async () =>
  todoService.getTodos()
);

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
        state.data = action.payload.data;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.error;
      });
  },
});

export { getTodos };
export default todosSlice.reducer;
