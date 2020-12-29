import {getBooks} from "../../../api/books";
import {notifier} from "../../../helpers/Notifier";

import { BOOKS_ACTION_TYPES } from "../action-types/books.action-types";

export const fetchBooksStart = () => ({
  type: BOOKS_ACTION_TYPES.BOOKS_FETCH.START
});

export const fetchBooksInProgress = () => ({
  type: BOOKS_ACTION_TYPES.BOOKS_FETCH.IN_PROGRESS,
});

export const fetchBooksSuccess = (books) => ({
  type: BOOKS_ACTION_TYPES.BOOKS_FETCH.SUCCESS,
  payload: {books},
});

export const fetchBooksError = (error) => ({
  type: BOOKS_ACTION_TYPES.BOOKS_FETCH.ERROR,
  payload: error,
});

export const paginateBooks = (page = 1) => ({
  type: BOOKS_ACTION_TYPES.BOOKS_PAGINATE,
  payload: { page },
});