import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";
const CakeContainer = (props) => {
  return (
    <div>
      <div>no of cake-{props.noOfCake}</div>
      <button onClick={props.buyCake}>buy cake</button>
    </div>
  );
};
const mapStateToProps = (state) => {
    
  return {
    noOfCake: state.cake.noOfCake,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => {
      dispatch(buyCake());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
