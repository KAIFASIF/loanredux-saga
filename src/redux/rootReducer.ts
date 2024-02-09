import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSaga";
import loanReducer from "./loanSlice";

const rootReducer = combineReducers({
  user: userReducer,
  loan: loanReducer
});

export default rootReducer;
