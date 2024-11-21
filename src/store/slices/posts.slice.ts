import {
  createAsyncThunk,
  createSlice,
  SerializedError,
} from "@reduxjs/toolkit";
import postService from "../../services/postService";
import PostType from "../../types/Post.type";
import sliceName from "../sliceName.state";
import { RootState } from "../store";

interface PostsState {
  isFetchingFirst: boolean;
  isFetching: boolean;
  data: PostType[];
  error?: SerializedError | null;
}

const initialState: PostsState = {
  isFetchingFirst: true,
  isFetching: false,
  data: [],
  error: null,
};

const getPosts = createAsyncThunk(sliceName.posts, async () =>
  postService.getPosts()
);

const postsStates = (state: RootState) => state[sliceName.posts];

const postsSlice = createSlice({
  name: sliceName.posts,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isFetching = false;
        state.isFetchingFirst = false;
        state.data = action.payload.data;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.error;
      });
  },
});

export { getPosts, postsStates };
export default postsSlice.reducer;
