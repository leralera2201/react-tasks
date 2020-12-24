export const BOOKS_REQUEST = "BOOKS_REQUEST";
export const BOOK_REQUEST = "BOOK_REQUEST";
export const SET_BOOKS = "SET_BOOKS";
export const SET_BOOK = "SET_BOOK";
export const BOOK_ERROR = "BOOK_ERROR";

export const getBooks = () => ({
  type: BOOKS_REQUEST,
});

export const getBook = (id) => ({
  type: BOOK_REQUEST,
  payload: { id },
});

export const setBooks = (books) => ({
  type: SET_BOOKS,
  payload: { books },
});

export const setBook = (book) => ({
  type: SET_BOOK,
  payload: { book },
});

export const setError = (error) => ({
  type: BOOK_ERROR,
  payload: error,
});
