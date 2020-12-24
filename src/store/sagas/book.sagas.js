import { takeLatest, call, put } from "redux-saga/effects";

import axios from "./../../utils/axios.config";
import { BOOK_REQUEST, setBook, setError } from "../actions/book.actions";

async function bookRequest(id) {
  const { data } = await axios.get(`/api/v1/Books/${id}`);
  return data;
}

function* bookWorker({ payload }) {
  try {
    const data = yield call(bookRequest, payload);
    yield put(setBook(data));
  } catch (e) {
    yield put(setError("Something went wrong. Try again"));
  }
}

export function* bookWatcher() {
  yield takeLatest(BOOK_REQUEST, bookWorker);
}
