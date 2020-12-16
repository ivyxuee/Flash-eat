import React from "react";
import Profile from "../components/user/Profile";
import {connect} from "react-redux";
import profileService from "../services/ProfileService";
import userService from "../services/UserService";
import {findReviewsByUserName} from "../actions/profileActions";
import {
  findAllUsers,
  findCurrentUser,
  findUserById, updateUser
} from "../actions/userActions";

const stateToPropertyMapper = (state) => ({
  users: state.user.users
});

const dispatchToPropertyMapper = (dispatch) => ({
  findReviewsByUsername: (userName) =>
      profileService.findReviewsByUsername(userName)
      .then(reviews =>
          dispatch(findReviewsByUserName(reviews))),
  findAllUsers: () =>
      userService.findAllUsers()
      .then(users =>
          dispatch(findAllUsers(users))),
  findUserById: (userId) =>
      userService.findUserById(userId)
      .then(user =>
          dispatch(findUserById(user))),
  findCurrentUser: () =>
      userService.findCurrentUser()
      .then(user =>
      dispatch(findCurrentUser(user))),
  updateUser: (user) =>
      userService.updateUser(user)
      .then(actualUser =>
          dispatch(updateUser(actualUser))),
});

const ProfilesContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(Profile);

export default ProfilesContainer;
