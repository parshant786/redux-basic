import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux";

export const CakeContainerWithHook = () => {
  const dispatch = useDispatch();
  const noOfCake = useSelector((state) => {
    return state.cake.noOfCake;
  });

  return (
    <>
      <div>no of cake {noOfCake}</div>
      <button onClick={() => dispatch(buyCake())}>buy CAKE</button>
    </>
  );
};
