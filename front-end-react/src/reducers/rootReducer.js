import userReducer from "./userReducer";
import restaurantReducer from "./restaurantReducer";
import {combineReducers} from "redux";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
  user: userReducer,
  restaurant: restaurantReducer,
  profile: profileReducer
})

export default rootReducer;
