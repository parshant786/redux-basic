import { FETCH_REQUEST_FAILER, FETCH_REQUEST_SUCCESS, FETCH_REQUEST } from "./actionType";
const intialState = {
  loading: false,
  data: [],
  error: "",
};
const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_REQUEST_FAILER:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
