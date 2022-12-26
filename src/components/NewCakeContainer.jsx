import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";
const NewCakeContainer = (props) => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <div>no of cake-{props.noOfCake}</div>
      <input value={number} onChange={(e) => setNumber(e.target.value)} type='text' />
      <button onClick={()=>props.buyCake(number)}>buy cake</button>
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
    buyCake: number => {
      dispatch(buyCake(number));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
