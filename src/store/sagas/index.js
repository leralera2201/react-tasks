import { all, fork } from 'redux-saga/effects';

import * as booksSagas from '../../pages/Books/sagas/books.sagas';
import * as bookSagas from '../../pages/Book/sagas/book.sagas';

const combinedSagas = {
  ...booksSagas,
  ...bookSagas,
};

export default function* rootSaga() {
  yield all(Object.values(combinedSagas).map((saga) => fork(saga)));
}
