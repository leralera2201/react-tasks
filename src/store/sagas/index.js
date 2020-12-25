import { fork } from "redux-saga/effects";

import { booksWatcher } from "../../pages/Books/sagas/books.sagas";
import { bookWatcher } from "../../pages/Book/sagas/book.sagas";

export default function* allSagas() {
  yield fork(booksWatcher);
  yield fork(bookWatcher);
}
