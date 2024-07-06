import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import { thunk } from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import mySaga from "./sagas/index";

import loginReducer from "./reducers/loginReucer";
import countReducer from "./reducers/countReducer";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  loginReducer,
  countReducer,
});

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk, sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(mySaga);

export default store;
