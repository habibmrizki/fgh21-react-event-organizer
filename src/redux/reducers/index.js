import { combineReducers } from "@reduxjs/toolkit";
// import counter from "./counter";
// import survey from "./survey";
// import todolist from "./todolist";
import auth from "./auth";
import event from "./event";
import profile from "./profile";

const reducer = combineReducers({
  //   survey,
  //   todolist,
  auth,
  event,
  profile,
});

export default reducer;
