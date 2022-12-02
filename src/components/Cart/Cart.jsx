import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./Cart.css";

const Cart = () => {
  return (
    <>
      <Header />
      <div className="Cart">
        <div className="Cart__Container">
          <div className="Cart__Title">Lorem Ipsum</div>
          <div className="Cart__Details">Talle: S | Color: Negro</div>
          <div className="Cart__BottomRow">
            <div className="Cart__Price">$1500</div>
            <div className="Cart__Quantity">
              <div>-</div>
              <div>1</div>
              <div>+</div>
            </div>
          </div>
        </div>
        <div className="Cart__Container">
          <div className="Cart__Title">Lorem Ipsum</div>
          <div className="Cart__Details">Talle: S | Color: Negro</div>
          <div className="Cart__BottomRow">
            <div className="Cart__Price">$500</div>
            <div className="Cart__Quantity">
              <div>-</div>
              <div>2</div>
              <div>+</div>
            </div>
          </div>
        </div>
      </div>
      <div className="Cart__Buttons">
        <Link className="Cart__ShopButton" to="/">
          Seguir Comprando
        </Link>
        <Link className="Cart__PayButton">Pagar $2500</Link>
      </div>
    </>
  );
};

export default Cart;
