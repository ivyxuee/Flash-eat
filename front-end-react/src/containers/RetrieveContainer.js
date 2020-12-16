import React from "react";
import {connect} from "react-redux";
import service from "../services/UserService";
import {
  loginUser
} from "../actions/userActions";
import Retrieve from "../components/user/Retrieve";

const stateToPropertyMapper = (state) => ({
  authError: state.user.authError
});

const dispatchToPropertyMapper = (dispatch) => ({
  loginUser: (credentials) =>
      service.loginUser(credentials)
      .then(response =>
          dispatch(loginUser(response)))
});

const RetrieveContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(Retrieve);

export default RetrieveContainer;
