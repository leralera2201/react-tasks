import { BOOK_ERROR, BOOK_REQUEST, SET_BOOK } from "../types";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

// reducers/sagas > index.js

const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_REQUEST: {
      return { ...state, error: null, loading: true };
    }
    case SET_BOOK: {
      const { book } = action.payload;
      return { ...state, loading: false, data: book };
    }
    case BOOK_ERROR: {
      return { ...state, loading: false, error: action.payload };
    }
    default:
      return state;
  }
};

export default BookReducer;
