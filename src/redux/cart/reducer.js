import {
  CART_ADDITEM,
  CART_INCREASEQUANTITY,
  CART_DELETEITEM,
  CART_DECREASEQUANTITY,
} from "./action_types";

const initialState = [];

const myCartReducer = (state = initialState, action) => {
  let newState = state;

  switch (action.type) {
    case CART_ADDITEM:
      newState.push({ id: action.payload, quantity: 1 });
      return newState;

    case CART_INCREASEQUANTITY:
      newState = newState.map((item) => {
        if (item.id === action.payload)
          return {
            id: item.id,
            quantity: item.quantity + 1,
          };
        else return item;
      });
      return newState;

    case CART_DELETEITEM:
      newState = newState.filter((item) => item.id !== action.payload);
      return newState;

    case CART_DECREASEQUANTITY:
      newState = newState.map((item) => {
        if (item.id === action.payload)
          return {
            id: item.id,
            quantity: item.quantity - 1,
          };
        else return item;
      });

      newState = newState.filter((item) => item.quantity !== 0);

      return newState;

    default:
      return state;
  }
};

export default myCartReducer;
