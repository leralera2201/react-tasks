import { BOOK_ERROR, BOOK_REQUEST, SET_BOOK } from "../types";

export const getBook = (id) => ({
  type: BOOK_REQUEST,
  payload: id,
});

export const setBook = (book) => ({
  type: SET_BOOK,
  payload: { book },
});

export const setBookError = (error) => ({
  type: BOOK_ERROR,
  payload: error,
});
