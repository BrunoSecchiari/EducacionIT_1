import Header from "../Header/Header";
import "./Index.css";
import Box from "../Box/Box";

const Index = () => {
  
  const products = [
    { id: 1, name: "Anteojos 1", class: "Boxs Boxs1" },
    { id: 2, name: "Anteojos 2", class: "Boxs Boxs2" },
    { id: 3, name: "Anteojos 3", class: "Boxs Boxs3" },
  ];
  
  return (
    <>
      <Header />
      {products.map((product) => (
        <Box  
          key={product.id}
          id={product.id}
          name={product.name}
          class={product.class}
        />
      ))}
    </>
  );
};

export default Index;
