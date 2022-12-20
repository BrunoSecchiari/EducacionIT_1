import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/reducer";

const reducer = combineReducers({
  cart: cartReducer,
});

const store = configureStore(reducer);

export default store;
