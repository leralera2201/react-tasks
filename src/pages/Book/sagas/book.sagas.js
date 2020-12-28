import { takeLatest, call, put } from "redux-saga/effects";

import {createBook, deleteBook, getBook, updateBook} from "../../../api/books";

import {
  fetchBookInProgress,
  fetchBookError,
  fetchBookSuccess,
  createBookSuccess,
  createBookInProgress,
  createBookError,
  updateBookInProgress,
  updateBookSuccess,
  updateBookError,
  deleteBookInProgress,
  deleteBookSuccess,
  deleteBookError
} from "../actions/book.actions";
import { BOOK_ACTION_TYPES } from "../action-types/book.action-types";

function* bookFetchSaga({ payload: {id} }) {
  try {
    yield put(fetchBookInProgress());
    const data = yield call(getBook, id);
    yield put(fetchBookSuccess(data));
  } catch (e) {
    yield put(fetchBookError("Something went wrong. Try again"));
  }
}

export function* bookFetchWatcher() {
  yield takeLatest(BOOK_ACTION_TYPES.BOOK_FETCH.START, bookFetchSaga);
}

function* bookCreateSaga({ payload: {book} }) {
  try {
    yield put(createBookInProgress());
    const data = yield call(createBook, book);
    yield put(createBookSuccess(data));
  } catch (e) {
    yield put(createBookError("Something went wrong. Try again"));
  }
}

export function* bookCreateWatcher() {
  yield takeLatest(BOOK_ACTION_TYPES.BOOK_CREATE.START, bookCreateSaga);
}

function* bookUpdateSaga({ payload: {book} }) {
  try {
    yield put(updateBookInProgress());
    const data = yield call(updateBook, book);
    yield put(updateBookSuccess(data));
  } catch (e) {
    yield put(updateBookError("Something went wrong. Try again"));
  }
}

export function* bookUpdateWatcher() {
  yield takeLatest(BOOK_ACTION_TYPES.BOOK_UPDATE.START, bookUpdateSaga);
}

function* bookDeleteSaga({ payload: {id} }) {
  try {
    yield put(deleteBookInProgress());
    const data = yield call(deleteBook, id);
    yield put(deleteBookSuccess(data));
  } catch (e) {
    yield put(deleteBookError("Something went wrong. Try again"));
  }
}

export function* bookDeleteWatcher() {
  yield takeLatest(BOOK_ACTION_TYPES.BOOK_DELETE.START, bookDeleteSaga);
}
