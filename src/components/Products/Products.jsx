import "./Products.css";

const Products = (props) => {
  const productClass = `Boxs ${props.class ? props.class : ""}`;

  return (
    <div className={productClass}>
      <div className="Box">
        <span>{props.name}</span>
      </div>
    </div>
  );
};

export default Products;
