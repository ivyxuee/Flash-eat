import React from "react";
import {connect} from "react-redux";
import service from "../services/UserService";
import {
  logoutUser
} from "../actions/userActions";
import SignedInLinks from "../components/layout/SignedInLinks";



const dispatchToPropertyMapper = (dispatch) => ({
  logoutUser: () =>
      service.logoutUser()
      .then(response =>
          dispatch(logoutUser(response)))
});

const SignOutContainer = connect(
    null,
    dispatchToPropertyMapper
)(SignedInLinks);


export default SignOutContainer;
