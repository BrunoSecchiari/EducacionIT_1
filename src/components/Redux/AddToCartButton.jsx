import { connect } from "react-redux";
import { myAddItemAction } from "../../redux/cart/actions";

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => {
      dispatch(myAddItemAction(id));
    },
  };
};

const AddToCartButton = (props) => {
  return <button onClick={props.onClick}>Add Item</button>;
};

const myConnector = connect(mapStateToProps, mapDispatchToProps);

export default myConnector(AddToCartButton);
