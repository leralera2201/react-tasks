import {
  BOOKS_ERROR,
  BOOKS_REQUEST,
  PAGINATE_BOOKS,
  SET_BOOKS,
} from "../types";

export const getBooks = () => ({
  type: BOOKS_REQUEST,
});

export const setBooks = (books) => ({
  type: SET_BOOKS,
  payload: { books },
});

export const paginateBooks = (page = 1) => ({
  type: PAGINATE_BOOKS,
  payload: { page },
});

export const setBooksError = (error) => ({
  type: BOOKS_ERROR,
  payload: error,
});
