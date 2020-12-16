import {FIND_ALL_REVIEWS_BY_USERNAME} from "../actions/profileActions";

const initState = {
  reviews: [],
  currentUser: null,
};

const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case FIND_ALL_REVIEWS_BY_USERNAME:
      return {
        ...state,
        reviews: [...state.reviews, action.reviews]
      };
    default:
      return state;
  }
};

export default profileReducer;
