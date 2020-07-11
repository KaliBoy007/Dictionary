import { combineReducers } from "redux";
import defReducer from "./defReducers";

export default combineReducers({
  definitions: defReducer,
});
