import { combineReducers } from "redux";

import BooksReducer from "../../pages/Books/reducers/books.reducer";
import BookReducer from "../../pages/Book/reducers/book.reducer";

const rootReducer = combineReducers({
  books: BooksReducer,
  book: BookReducer,
});

export default rootReducer;
