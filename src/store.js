import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todoReducer";
// reducers import

const reducers = combineReducers({ todo: todoReducer });

const store = createStore(reducers);

export default store;
