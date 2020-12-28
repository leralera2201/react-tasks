import { BOOK_ACTION_TYPES } from '../action-types/book.action-types';

export const fetchBookStart = (id) => ({
  type: BOOK_ACTION_TYPES.BOOK_FETCH.START,
  payload: { id }
});

export const fetchBookInProgress = () => ({
  type: BOOK_ACTION_TYPES.BOOK_FETCH.IN_PROGRESS,
});

export const fetchBookSuccess = (book) => ({
  type: BOOK_ACTION_TYPES.BOOK_FETCH.SUCCESS,
  payload: {book},
});

export const fetchBookError = (error) => ({
  type: BOOK_ACTION_TYPES.BOOK_FETCH.ERROR,
  payload: error,
});

export const createBookStart = (book) => ({
  type: BOOK_ACTION_TYPES.BOOK_CREATE.START,
  payload: { book },
});

export const createBookInProgress = () => ({
  type: BOOK_ACTION_TYPES.BOOK_CREATE.IN_PROGRESS,
});

export const createBookSuccess = (book) => ({
  type: BOOK_ACTION_TYPES.BOOK_CREATE.SUCCESS,
  payload: { book },
});

export const createBookError = (error) => ({
  type: BOOK_ACTION_TYPES.BOOK_CREATE.ERROR,
  payload: error ,
});

export const updateBookStart = (book) => ({
  type: BOOK_ACTION_TYPES.BOOK_UPDATE.START,
  payload: { book },
});

export const updateBookInProgress = () => ({
  type: BOOK_ACTION_TYPES.BOOK_UPDATE.IN_PROGRESS,
});

export const updateBookSuccess = (book) => ({
  type: BOOK_ACTION_TYPES.BOOK_UPDATE.SUCCESS,
  payload: { book },
});

export const updateBookError = (error) => ({
  type: BOOK_ACTION_TYPES.BOOK_UPDATE.ERROR,
  payload: error ,
});

export const deleteBookStart = (id) => ({
  type: BOOK_ACTION_TYPES.BOOK_DELETE.START,
  payload: { id },
});

export const deleteBookInProgress = () => ({
  type: BOOK_ACTION_TYPES.BOOK_DELETE.IN_PROGRESS,
});

export const deleteBookSuccess = (id) => ({
  type: BOOK_ACTION_TYPES.BOOK_DELETE.SUCCESS,
  payload: { id },
});

export const deleteBookError = (error) => ({
  type: BOOK_ACTION_TYPES.BOOK_DELETE.ERROR,
  payload: error ,
});
