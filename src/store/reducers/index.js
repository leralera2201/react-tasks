import { combineReducers } from "redux";

import BooksReducer from "../../pages/Books/reducers/books.reducer";
import BookReducer from "../../pages/Book/reducers/book.reducer";

const bookRoot = combineReducers({
  books: BooksReducer,
  book: BookReducer,
});

const rootReducer = combineReducers({
  bookRoot,
});

export default rootReducer;
