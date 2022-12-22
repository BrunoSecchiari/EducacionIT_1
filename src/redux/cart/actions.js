import {
  CART_ADDITEM,
  CART_INCREASEQUANTITY,
  CART_DELETEITEM,
  CART_DECREASEQUANTITY,
} from "./action_types";

export const addItem = (id) => ({
  type: CART_ADDITEM,
  payload: id,
});

export const increaseQuantity = (id) => ({
  type: CART_INCREASEQUANTITY,
  payload: id,
});

export const deleteItem = (id) => ({
  type: CART_DELETEITEM,
  payload: id,
});

export const decreaseQuantity = (id) => ({
  type: CART_DECREASEQUANTITY,
  payload: id,
});
