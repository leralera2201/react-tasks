import { all } from "redux-saga/effects";
import { booksWatcher } from "./books.sagas";
import { bookWatcher } from "./book.sagas";

export default function* allSagas() {
  // TODO: Watch saga DOC about sagas run
  yield all([booksWatcher(), bookWatcher()]);
}
