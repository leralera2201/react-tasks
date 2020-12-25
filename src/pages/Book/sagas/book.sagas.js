import { takeLatest, call, put } from "redux-saga/effects";

import { getBook } from "../../../api/books";

import { setBook, setBookError } from "../actions/book.actions";
import { BOOK_REQUEST } from "../types";

function* bookWorker({ payload }) {
  try {
    const data = yield call(getBook, payload);
    yield put(setBook(data));
  } catch (e) {
    yield put(setBookError("Something went wrong. Try again"));
  }
}

export function* bookWatcher() {
  yield takeLatest(BOOK_REQUEST, bookWorker);
}
