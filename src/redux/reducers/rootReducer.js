import { combineReducers } from "redux"; // combines your individual reducers
import { authReducer } from "./auth";
import { followerReducer} from "./followers";

const rootReducer = combineReducers({
  auth: authReducer,
  followers: followerReducer,
});

export default rootReducer;
