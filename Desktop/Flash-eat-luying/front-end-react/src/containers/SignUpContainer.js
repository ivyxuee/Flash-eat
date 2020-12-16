import React from "react";
import SignUp from "../components/user/SignUp";
import {connect} from "react-redux";
import service from "../services/UserService";
import {
  createUser,
  updateUser,
  deleteUser
} from "../actions/userActions";

const stateToPropertyMapper = (state) => ({
  users: state.user.users
});

const dispatchToPropertyMapper = (dispatch) => ({
  createUser: (user) =>
      service.createUser(user)
      .then(actualUser =>
          dispatch(createUser(actualUser)))
      .then(response => console.log("creating user to backend server", user)),
  updateUser: (user) =>
      service.updateUser(user)
      .then(actualUser =>
          dispatch(updateUser(actualUser))),
  deleteUser: (userId) =>
      service.deleteUser(userId)
      .then(response =>
          dispatch(deleteUser(userId)))
});

const SignUpContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(SignUp);

export default SignUpContainer
