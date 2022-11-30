import "./Cart.css";

const Cart = () => {
  return (
    <>
      <div className="Cart__Container">
        <h3 className="Cart__Title">Lorem Ipsum</h3>
        <p className="Cart__Size">Talle: S</p>
        <p className="Cart__Color">Color: Negro</p>
        <div className="Cart__BottomRow">
          <div className="Cart__Price">$1500</div>
          <div className="Cart__Quantity">
            <div className="Cart__QuantityMinus">-</div>
            <p className="Cart__QuantityAmount">1</p>
            <div className="Cart__QuantityPlus">+</div>
          </div>
        </div>
      </div>
      <div className="Cart__Container">
        <h3 className="Cart__Title">Lorem Ipsum</h3>
        <p className="Cart__Size">Talle: S</p>
        <p className="Cart__Color">Color: Negro</p>
        <div className="Cart__BottomRow">
          <div className="Cart__Price">$1500</div>
          <div className="Cart__Quantity">
            <div className="Cart__QuantityMinus">-</div>
            <p className="Cart__QuantityAmount">2</p>
            <div className="Cart__QuantityPlus">+</div>
          </div>
        </div>
      </div>
      <div className="Cart__Buttons">
        <button className="Cart__ShopButton">Seguir Comprando</button>
        <button className="Cart__PayButton">Pagar $2500</button>
      </div>
    </>
  );
};

export default Cart;
