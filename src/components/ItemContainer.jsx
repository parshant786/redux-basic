import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

 const ItemContainer = (props) => {
  return <>
  <div>ItemContainer - {props.item}</div>
  <button onClick={props.dispatch}>buy item</button>
  </>;
};
const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake ? state.cake.noOfCake : state.iceCream.noOfIceCream;
  return {
      item:itemState
  }
};
const mapDispatchToProps =(dispatch,ownProps)=>{
const dispatchfuction = ownProps.cake ? ()=>{dispatch(buyCake())}:()=>{dispatch(buyIceCream())}
return {
    dispatch:dispatchfuction
}
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)