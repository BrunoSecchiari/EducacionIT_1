import {
  CART_ADDITEM,
  CART_INCREASEQUANTITY,
  CART_DELETEITEM,
  CART_DECREASEQUANTITY,
} from "./action_types";

export const cartAddItem = (id) => ({
  type: CART_ADDITEM,
  payload: id,
});

export const cartIncreaseQuantity = (id) => ({
  type: CART_INCREASEQUANTITY,
  payload: id,
});

export const cartDeleteItem = (id) => ({
  type: CART_DELETEITEM,
  payload: id,
});

export const cartDecreaseQuantity = (id) => ({
  type: CART_DECREASEQUANTITY,
  payload: id,
});
