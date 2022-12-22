import { connect } from "react-redux";
import { addItem } from "../../redux/cart/actions";

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (id) => {
      dispatch(addItem(id));
    },
  };
};

const AddToCartButton = (props) => {
  return <button onClick={props.addItem}>Add Item</button>;
};

const myConnector = connect(mapStateToProps, mapDispatchToProps);

export default myConnector(AddToCartButton);
