import { BUY_ICE_CREAM } from "./actionType";

const intialState = {
  noOfIceCream: 20,
};

const iceCreamReducer = (state = intialState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        noOfIceCream: state.noOfIceCream - 1,
     
      };

    default:
      return state;
  }
};
export default iceCreamReducer;
