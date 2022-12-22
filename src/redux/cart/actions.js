import {
  CART_ADDITEM,
  CART_INCREASEQUANTITY,
  CART_DELETEITEM,
  CART_DECREASEQUANTITY,
} from "./action_types";

export const myAddItemAction = (id) => ({
  type: CART_ADDITEM,
  payload: id,
});

export const myIncreaseQuantityAction = (id) => ({
  type: CART_INCREASEQUANTITY,
  payload: id,
});

export const myDeleteItemAction = (id) => ({
  type: CART_DELETEITEM,
  payload: id,
});

export const myDecreaseQuantityAction = (id) => ({
  type: CART_DECREASEQUANTITY,
  payload: id,
});
