import Header from "../Header/Header";
import Products from "../Products/Products";
import SearchBar from "../SearchBar/SearchBar";
import "./Index.css";

const Index = () => {
  const products = [
    { id: 1, name: "Anteojos 1", class: "Boxs1" },
    { id: 2, name: "Anteojos 2", class: "Boxs2" },
    { id: 3, name: "Anteojos 3", class: "Boxs3" },
  ];

  return (
    <>
      <Header />
      <SearchBar />
      <div className="Container">
        {products.map((product, index) => (
          <Products
            key={index}
            id={product.id}
            name={product.name}
            class={product.class}
          />
        ))}
      </div>
    </>
  );
};

export default Index;
