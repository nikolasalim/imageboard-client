import { combineReducers } from "redux";
import images from "./images";
import user from "./user";
import usersList from "./usersList";
import comments from "./comments";

export default combineReducers({
  images,
  user,
  usersList,
  comments
});
