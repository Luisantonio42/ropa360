
import userReducer from "./user/userReducer";
import { combineReducers } from "redux";
import CartReducer from "./cart/cartReducer";

export default combineReducers({
  user: userReducer,
  cart: CartReducer
});