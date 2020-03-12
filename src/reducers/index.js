import { combineReducers } from "redux";
import images from "./images";
import user from "./user";
import usersList from "./usersList";

export default combineReducers({
  images,
  user,
  usersList
});
