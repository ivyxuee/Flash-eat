import React from "react";
import {connect} from "react-redux";
import service from "../services/ProfileService";
import {findReviewsByUserName} from "../actions/profileActions";
import PersonalProfile from "../components/user/PersonalProfile";
import userService from "../services/UserService";
import {findCurrentUser, findUserById, findUserByUserName} from "../actions/userActions";

const stateToPropertyMapper = (state) => ({
  currentUser: state.user.currentUser
});

const dispatchToPropertyMapper = (dispatch) => ({
  findReviewsByUsername: (userName) =>
      service.findReviewsByUsername(userName)
      .then(reviews =>
          dispatch(findReviewsByUserName(reviews))),
  findUserById: (userId) =>
      userService.findUserById(userId)
      .then(user =>
          dispatch(findUserById(user))),
  findCurrentUser: () =>
      userService.findCurrentUser()
      .then(user =>
          dispatch(findCurrentUser(user))),
  findUserByUserName: (userName) =>
      userService.findUserByUserName(userName)
      .then(user =>
          dispatch(findUserByUserName(user))),
  findOrdersByUserId: (userId) =>
      service.findOrdersByUserId(userId),
  findReviewsByUserId: (userId) =>
      service.findReviewsByUserId(userId)
        .then(reviews =>
            dispatch(findReviewsByUserName(reviews)))

});

const PersonalProfileContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(PersonalProfile);

export default PersonalProfileContainer;
