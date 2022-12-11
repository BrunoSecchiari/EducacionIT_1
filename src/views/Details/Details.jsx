import { useContext } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import ProductContext from "../../context/ProductContext";
import ProductDetails from "../../components/Product/ProductDetails";
import "./Details.css";

const Details = () => {
  const { id } = useParams();
  const productList = useContext(ProductContext);
  const currentProduct = productList.filter((product) => product.id === +id);

  return (
    <>
      <Header view="details" />
      <div className="Details__Container">
        <Button class="Details__ReturnButton" link="/" text="Volver" />
        <ProductDetails currentProduct={currentProduct} />
        <Button class="Details__AddButton" link="/cart" text="Lo Quiero" />
      </div>
    </>
  );
};

export default Details;
