// User API
export const USERS_API_URL = "http://localhost:3000/api/users";
export const USERS_API_URL_LOGIN = "http://localhost:3000/api/login";
export const USERS_API_URL_REGISTER = "http://localhost:3000/api/register";
export const USERS_API_URL_BY_ID = (userId) => `http://localhost:3000/api/users/${userId}`;
export const USERS_API_URL_BY_USER_NAME = (username) => `http://localhost:3000/api/users/username/${username}`;
export const USERS_API_URL_LOGOUT = "http://localhost:3000/api/logout";
export const USERS_API_URL_CURRENT_USER = "http://localhost:3000/api/currentuser";

//profile
export const PROFILE_BY_USERNAME_API_URL = (username) => `http://localhost:3000/api/profile/${username}`;

//orders
export const ORDER_BY_USER_ID_API_URL = (userId) => `http://localhost:3000/api/orders/users/${userId}`;
