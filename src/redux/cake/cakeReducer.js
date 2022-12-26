import { BUY_CAKE } from "./actionType";

const intialState = {
  noOfCake: 10,
};
const cakeReducer = (state = intialState, action) => {

  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCake: state.noOfCake - action.payload,
      };

    default:
      return state;
  }
};

export default cakeReducer;
