import {
  USERS_API_URL,
  USERS_API_URL_LOGIN,
  USERS_API_URL_REGISTER,
  USERS_API_URL_LOGOUT,
  USERS_API_URL_BY_ID, USERS_API_URL_CURRENT_USER,USERS_API_URL_BY_USER_NAME
} from "../common/constants";

 const createUser = (user) =>
    fetch(USERS_API_URL_REGISTER, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      },
      credentials: "include"
    }).then(response => response.json());

 const findAllUsers = async () => {
  let response = await fetch(USERS_API_URL,{
    method: 'GET',
    credentials: "include"
  });
  return await response.json();
};

 const findUserById = async (userId) => {
  let response = fetch(USERS_API_URL_BY_ID(userId),{
    method: 'GET',
    credentials: "include"
  })
   return await response;
};

const findUserByUserName = async (userName) => {
  let response = fetch(USERS_API_URL_BY_USER_NAME(userName),{
    method: 'GET',
    credentials: "include"
  })
  return await response;
};

 const findCurrentUser = () =>
     fetch(USERS_API_URL_CURRENT_USER, {
       credentials: "include"
     }).then(response => response.json())

 const updateUser = (user) => {
  return fetch(USERS_API_URL_BY_ID(user._id), {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      'content-type': 'application/json'
    },
    credentials: "include"
  }).then(response => response.json())
};

const deleteUser = async (userId) => {
  let response = await fetch(USERS_API_URL_BY_ID(userId), {
    method: 'DELETE',
    credentials: "include"
  });
  return await response.json();
};

const loginUser = async (credentials) => {
  let response = await fetch(USERS_API_URL_LOGIN, {
    method: 'POST',
    body: JSON.stringify(credentials),
    headers: {
      'content-type': 'application/json'
    },
    credentials: "include"
  });
  return await response.json();
};

const logoutUser = async () => {
  let response = await fetch(USERS_API_URL_LOGOUT, {
    method: 'POST',
    credentials: "include"
  });
  return response;
};


export default {
  createUser,
  findUserById,
  findAllUsers,
  updateUser,
  deleteUser,
  loginUser,
  logoutUser,
  findCurrentUser,
  findUserByUserName
};
