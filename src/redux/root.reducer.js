import { combineReducers } from "redux";
import homeReducer from "./home/home.reducers";

export default combineReducers({
    home: homeReducer
});
