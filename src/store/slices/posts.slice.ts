import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postService from "../../services/postService";
import PostType from "../../types/Post.type";
import sliceName from "../sliceName.state";

interface PostsState {
  isFetching: boolean;
  data: PostType[];
  error: any;
}

const initialState: PostsState = {
  isFetching: false,
  data: [],
  error: null,
};

const getPosts = createAsyncThunk(sliceName.posts, async () =>
  postService.getPosts()
);

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
        state.data = action.payload.data;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.error;
      });
  },
});

export default postsSlice.reducer;
export { getPosts };
