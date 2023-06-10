import { combineReducers, legacy_createStore } from "redux";
import { reducers } from "./AppReducer/reducer";
import { reducer } from "./AuthReducer/reducer"

// NOTE: use this store variable to create a store.
let combinedReducer = combineReducers({
  AppReducer : reducers,
  AuthReducer : reducer
})
const store = legacy_createStore(combinedReducer);

export { store };

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}