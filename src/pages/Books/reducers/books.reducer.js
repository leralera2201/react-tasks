import {
  BOOKS_ERROR,
  BOOKS_REQUEST,
  PAGINATE_BOOKS,
  SET_BOOKS,
} from "../types";

const initialState = {
  loading: false,
  data: {
    books: [],
    currentBooks: [],
    currentPage: 1,
    booksPerPage: 20,
  },
  error: null,
};

const BooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKS_REQUEST: {
      return { ...state, error: null, loading: true };
    }
    case SET_BOOKS: {
      const { books } = action.payload;
      return { ...state, loading: false, data: { ...state.data, books } };
    }
    case PAGINATE_BOOKS: {
      const { page } = action.payload;
      const { booksPerPage, books } = state.data;
      const indexOfLastBook = page * booksPerPage;
      const indexOfFirstBook = indexOfLastBook - booksPerPage;
      const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
      return {
        ...state,
        loading: false,
        data: { ...state.data, currentBooks, currentPage: page },
      };
    }
    case BOOKS_ERROR: {
      return { ...state, loading: false, error: action.payload };
    }
    default:
      return state;
  }
};

export default BooksReducer;
