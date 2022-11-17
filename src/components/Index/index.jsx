import "./index.css";

const Index = () => {
  return (
    <>
      <div className="Header">
        <h3 className="Header__Title">MioMio</h3>
        <div className="Header__Cart">Carrito</div>
        <div className="Header__Line"></div>
        <div className="SearchBar">Tu búsqueda...</div>
      </div>

      <div className="Container">
        <div className="Boxs Boxs1">
          <div className="Box">
            <span>Lorem Ipsum</span>
          </div>
        </div>
        <div className="Boxs Boxs2">
          <div className="Box">
            <span>Lorem Ipsum</span>
          </div>
        </div>
        <div className="Boxs Boxs3">
          <div className="Box">
            <span>Lorem Ipsum</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
