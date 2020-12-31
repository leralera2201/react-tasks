import { takeLatest, call, put } from "redux-saga/effects";

import { getBooks } from "api/books";

import { fetchBooksError, fetchBooksInProgress, fetchBooksSuccess, paginateBooks } from "../actions/books.actions";
import { BOOKS_ACTION_TYPES } from "../action-types/books.action-types";

function* booksSaga() {
  try {
    yield put(fetchBooksInProgress());
    const data = yield call(getBooks);
    yield put(fetchBooksSuccess(data));
    yield put(paginateBooks());
  } catch (e) {
    yield put(fetchBooksError("Something went wrong. Try again"));
  }
}

export function* booksWatcher() {
  yield takeLatest(BOOKS_ACTION_TYPES.BOOKS_FETCH.START, booksSaga);
}
