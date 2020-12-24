import { takeLatest, call, put } from "redux-saga/effects";

import axios from "./../../utils/axios.config";
import { BOOKS_REQUEST, setBooks, setError } from "../actions/book.actions";

async function booksRequest() {
  const { data } = await axios.get("/api/v1/Books");
  return data;
}

function* booksWorker() {
  try {
    const data = yield call(booksRequest);
    yield put(setBooks(data));
  } catch (e) {
    yield put(setError("Something went wrong. Try again"));
  }
}

export function* booksWatcher() {
  yield takeLatest(BOOKS_REQUEST, booksWorker);
}
