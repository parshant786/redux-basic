import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";

const IceCreamContainer = (props) => {
  return (
    <>
      <div>IceCreamContainer- {props.noOfIceCream}</div>
      <button onClick={props.buyIceCream}>buyIceCream</button>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    noOfIceCream: state.iceCream.noOfIceCream,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => {
      dispatch(buyIceCream());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
