import {
  BOOK_ERROR,
  BOOK_REQUEST,
  BOOKS_REQUEST,
  SET_BOOK,
  SET_BOOKS,
} from "../actions/book.actions";

const initialState = {
  loading: false,
  data: [],
  error: null,
  book: null,
};

// reducers/sagas > index.js

const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKS_REQUEST:
    case BOOK_REQUEST: {
      return { ...state, error: null, loading: true };
    }
    case SET_BOOK:
      return { ...state, loading: false, book: action.payload };
    case SET_BOOKS:
      return { ...state, error: null, loading: false, books: action.payload };
    case BOOK_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default BookReducer;
