import { all, fork } from 'redux-saga/effects';

import bookSagas from '../../pages/Book/sagas/book.sagas';

const combinedSagas = {
  ...bookSagas,
};

export default function* rootSaga() {
  yield all(Object.values(combinedSagas).map((saga) => fork(saga)));
}
