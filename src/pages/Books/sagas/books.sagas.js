import { takeLatest, call, put } from "redux-saga/effects";

import { getBooks } from "../../../api/books";

import {
  paginateBooks,
  setBooks,
  setBooksError,
} from "../actions/books.actions";
import { BOOKS_REQUEST } from "../types";

function* booksWorker() {
  try {
    const data = yield call(getBooks);
    yield put(setBooks(data));
    yield put(paginateBooks());
  } catch (e) {
    yield put(setBooksError("Something went wrong. Try again"));
  }
}

export function* booksWatcher() {
  yield takeLatest(BOOKS_REQUEST, booksWorker);
}
