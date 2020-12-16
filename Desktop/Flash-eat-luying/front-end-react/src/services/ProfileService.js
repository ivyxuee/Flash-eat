import {
  PROFILE_BY_USERNAME_API_URL,
  ORDER_BY_USER_ID_API_URL
} from "../common/constants";


const findReviewsByUsername = async (userName) => {
  let response = await fetch(PROFILE_BY_USERNAME_API_URL(userName));
  return await response.json();
};

const findReviewsByUserId = async (userId) => {
  let response = await fetch(`http://localhost:3000/api/reviews/users/${userId}`);
  // console.log(userId, await response.json())
  return await response.json();
}

const findOrdersByUserId = async (userId) => {
  let response = await fetch(ORDER_BY_USER_ID_API_URL(userId));
  return await response.json();
};

export default {
  findReviewsByUsername,
  findOrdersByUserId,
  findReviewsByUserId
};
