export const FIND_ALL_USERS = "FIND_ALL_USERS";
export const findAllUsers = (users) => ({
  type: FIND_ALL_USERS,
  users: users
});

export const FIND_USER_BY_ID = "FIND_USER_BY_ID";
export const findUserById = (user) => ({
  user: user,
  type: FIND_USER_BY_ID
});

export const FIND_USER_BY_USER_NAME = "FIND_USER_BY_USER_NAME";
export const findUserByUserName = (user) => ({
  user: user,
  type: FIND_USER_BY_ID
});

export const FIND_CURRENT_USER = "FIND_CURRENT_USER";
export const findCurrentUser = () => ({
  type: FIND_CURRENT_USER
});

export const CREATE_USER = "CREATE_USER";
export const createUser = (user) => ({
  type: CREATE_USER,
  user: user
});

export const UPDATE_USER = "UPDATE_USER";
export const updateUser = (user) => ({
  type: UPDATE_USER,
  user: user,
  userId: user._id
});

export const DELETE_USER = "DELETE_USER";
export const deleteUser= (userId) => ({
  type: DELETE_USER,
  userId: userId,
});

export const LOGIN_USER = "LOGIN_USER";
export const loginUser= (response) => ({
  type: LOGIN_USER,
  response: response,
});

export const LOGOUT_USER = "LOGOUT_USER";
export const logoutUser= (response) => ({
  type: LOGOUT_USER,
  response: response,
});
