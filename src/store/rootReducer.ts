import { combineReducers } from "redux";
import { userReducer } from "./slices/user/userSlice";
import { activePointReducer } from "./slices/activePoint/activePointSlice";

const rootReducer = combineReducers({
  user: userReducer,
  activePoint: activePointReducer,
});

export default rootReducer;
