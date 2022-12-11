import "./ProductDetails.css";

const ProductDetails = (props) => {
  const currentProduct = props.currentProduct[0];

  return (
    <>
      <div className="Details__Box">
        <div className="Details__Image"></div>
      </div>
      <h3 className="Details__Title">{currentProduct.name}</h3>
      <p className="Details__Description">{currentProduct.description}</p>
      <div className="Details__Colors">Colores: {currentProduct.colors}</div>
      <div className="Details__Sizes">Talles: {currentProduct.sizes}</div>
      <div className="Details__Price">Precio: ${currentProduct.price}</div>
    </>
  );
};

export default ProductDetails;
