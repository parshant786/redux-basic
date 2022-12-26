import { FETCH_REQUEST_FAILER, FETCH_REQUEST_SUCCESS, FETCH_REQUEST } from "./actionType";
import axios from "axios";
export const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  };
};
export const fetchRequestSuccess = (userList) => {
  return {
    type: FETCH_REQUEST_SUCCESS,
    payload: userList,
  };
};

export const fetchRequestFailer = (error) => {
  return {
    type: FETCH_REQUEST_FAILER,
    payload: error,
  };
};
export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data;
        console.log(res);
        dispatch(fetchRequestSuccess(users));
      })
      .catch((error) => {
        const e = error.message;
        dispatch(fetchRequestFailer(e));
      });
  };
};
