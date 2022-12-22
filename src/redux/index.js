import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import myCartReducer from "./cart/reducer";

const myReducer = combineReducers({
  cart: myCartReducer,
});

const store = configureStore(myReducer);

export default store;
