import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../redux";
// import { useDispatch, useSelector } from "react-redux";

 const UserList = ({ fetchUser, userData }) => {
  useEffect( () => {
   fetchUser();
    
  }, []);
  return <>{userData?.data?.map((user)=>{return <div key={user.id}>{user.name}</div>})}</>
};
const mapStateToProps = (state) => {
  return {
    userData: state.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => {
      dispatch(fetchUser());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
