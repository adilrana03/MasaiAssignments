import { combineReducers, legacy_createStore } from "redux";
import { AuthReducer } from "./IsAuthReducer";
import { MyReducer } from "./Reducer";

const combinedReducer = combineReducers({ MyReducer, AuthReducer });

export const myStore = legacy_createStore(combinedReducer);
