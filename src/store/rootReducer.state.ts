import { combineReducers } from "@reduxjs/toolkit";
import sliceName from "./sliceName.state";
import postFiltersSlice from "./slices/postFilters.slice";
import todoFiltersSlice from "./slices/todoFilters.slice";

const rootReducer = combineReducers({
  [sliceName.postFilters]: postFiltersSlice,
  [sliceName.todoFilters]: todoFiltersSlice,
});
export default rootReducer;
