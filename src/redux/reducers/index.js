// i wil have multiple reducers - this to combine them together

import { combineReducers } from "redux";
import { reducer as modal } from "redux-modal";
import itemReducer from "./itemReducer";

//for review
const rootReduces = combineReducers({
  itemReducer,
  modal,
});

export default rootReduces;
