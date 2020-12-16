import React from "react";
import {connect} from "react-redux";
import service from "../services/UserService";
import {
  loginUser
} from "../actions/userActions";
import SignIn from "../components/user/SignIn";

const stateToPropertyMapper = (state) => ({
  authError: state.user.authError
});

const dispatchToPropertyMapper = (dispatch) => ({
  loginUser: (credentials) =>
      service.loginUser(credentials)
      .then(response =>
          dispatch(loginUser(response)))
});

const SignInContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(SignIn);

export default SignInContainer;
