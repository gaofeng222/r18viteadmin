import { legacy_createStore, combineReducers } from "redux";
import loginReducer from "./reducers/loginReucer";

const reducers = combineReducers({
  loginReducer,
});

const store = legacy_createStore(reducers);

export default store;
