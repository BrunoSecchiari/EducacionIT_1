import { useContext } from "react";
import CartProduct from "./CartProduct";
import CartProductContext from "../../context/CartProductContext";

const CartProductList = () => {
  const cartProductList = useContext(CartProductContext);

  return (
    <>
      {cartProductList.map((product, index) => (
        <CartProduct
          key={index}
          color={product.color}
          count={product.count}
          name={product.name}
          price={product.price}
          size={product.size}
        />
      ))}
    </>
  );
};

export default CartProductList;
