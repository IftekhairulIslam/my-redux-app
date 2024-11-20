import { combineReducers } from "@reduxjs/toolkit";
import sliceName from "./sliceName.state";
import postsSlice from "./slices/posts.slice";

const rootReducer = combineReducers({
  [sliceName.posts]: postsSlice,
  // [sliceName.todos]: todosSlice,
});
export default rootReducer;
