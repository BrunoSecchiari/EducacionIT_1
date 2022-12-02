import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h3 className="Header__Title">MioMio</h3>
      <Link className="Header__Cart" to="/cart">Carrito</Link>
      <div className="Header__Line"></div>
    </div>
  );
};

export default Header;
