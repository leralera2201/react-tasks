import { combineReducers } from "redux";
import BookReducer from "./reducers/book.reducer";

const rootReducer = combineReducers({
  books: BookReducer,
});

export default rootReducer;
