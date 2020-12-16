import {
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
  FIND_ALL_USERS,
  FIND_USER_BY_ID,
  LOGIN_USER,
  LOGOUT_USER, FIND_CURRENT_USER, FIND_USER_BY_USER_NAME
} from "../actions/userActions";

const initState = {
  users: [{
    id: '1', userName: 'Bob', Phone: '8578927364', Email: 'alice2020@gmail.com',
    Address: 'Seattle, WA', userLevel: 'SILVER'
  }],
  currentUser: null,
  authError: null
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        currentUser: action.user,
        users: [...state.users, action.user]
      };
    case UPDATE_USER:
      return {
        ...state,
        currentUser: action.user,
        users: state.users.map(user =>
            user._id === action.user._id ? action.user : user)
      };
    case DELETE_USER:
      return {
        ...state,
        currentUser: null,
        users: state.users.filter(user =>
            user._id !== action.user._id)
      };
    case FIND_USER_BY_ID:
      return {
        ...state,
        currentUser: action.user
      };
    case FIND_CURRENT_USER:
      return {
        ...state,
        currentUser: action.user
      };
    case FIND_USER_BY_USER_NAME:
      return state;
    case FIND_ALL_USERS:
      return {
        ...state,
        users: action.users
      };
    case LOGOUT_USER:
      console.log('Successfully Logged Out')
      return {
        ...state,
        currentUser: null,
        authError: null
      };
    case LOGIN_USER:
      if (action.response.userName) {
        console.log('Successfully Logged In')
        return {
          ...state,
          currentUser: action.response,
          authError: null
        };
      } else {
        console.log('Login failed')
        return {
          ...state,
          authError: 'Login failed'
        };
      }
    default:
      return state;
  }
};

export default userReducer;
