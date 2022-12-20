import { createContext } from "react";

const CartProductContext = createContext([
  {
    id: 1,
    color: "Negro",
    quantity: 1,
    price: 1500,
    name: "Anteojos 1",
    size: "S",
  },
  {
    id: 2,
    color: "Blanco",
    quantity: 2,
    price: 500,
    name: "Anteojos 2",
    size: "M",
  },
]);

export default CartProductContext;
