import { combineReducers } from "@reduxjs/toolkit";
import sliceName from "./sliceName.state";
import todoFiltersSlice from "./slices/todoFilters.slice";

const rootReducer = combineReducers({
  [sliceName.postFilters]: todoFiltersSlice,
  [sliceName.todoFilters]: todoFiltersSlice,
});
export default rootReducer;
