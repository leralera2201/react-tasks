import { takeLatest, put, call } from 'redux-saga/effects';
import sinon from 'sinon';
import * as api from '@api/books';

import { cloneableGenerator } from '@redux-saga/testing-utils';

import { BOOK_ACTION_TYPES } from '../../action-types/book.action-types';
import {
  createBookInProgress,
  createBookSuccess,
  deleteBookInProgress,
  deleteBookSuccess,
  fetchBookError,
  fetchBookInProgress,
  fetchBookSuccess,
  updateBookInProgress,
  updateBookSuccess,
} from '../../actions/book.actions';

import bookWatcher, {
  bookCreateSaga,
  bookDeleteSaga,
  bookFetchSaga,
  bookUpdateSaga,
} from './../book.sagas';

const dummyBook = {
  id: 0,
  title: 'string',
  description: 'string',
  pageCount: 0,
  excerpt: 'string',
  publishDate: '2020-12-30T16:01:13.371Z',
};

// test('Saga test', () => {
//   const iterator = cloneableGenerator(getBooks)(fetchBooksRequest(1, 8));
//   const watcher = watcherBooks();
//   deepEqual(
//       iterator.next(fetchBooksRequest(1, 8)).value,
//       call(getAllBooks),
//       'it should return state after request'
//   );
//
//   const cloneSuccess = iterator.clone();
//   deepEqual(
//       cloneSuccess.next({ data: [] }).value,
//       put(fetchBooksSuccess([], 1, 8)),
//       'it should be test success result'
//   );
//
//   const cloneError = iterator.clone();
//   expect(cloneError.next().value).toHaveProperty('PUT.action.error', true);
//
//   deepEqual(
//       watcher.next().value,
//       takeLatest(BOOKS_REQUEST, getBooks),
//       'it should be test error result'
//   );
// });

describe('testing book fetch saga ', () => {
  describe('watcher', () => {
    const iteratorWatcher = bookWatcher.bookFetchWatcher();

    it('should wait for every BOOK_FETCH.START action and call bookFetchSaga', () => {
      expect(iteratorWatcher.next().value).toEqual(
        takeLatest(BOOK_ACTION_TYPES.BOOK_FETCH.START, bookFetchSaga)
      );
    });

    it('should be done on next iteration', () => {
      expect(iteratorWatcher.next().done).toBeTruthy();
    });
  });

  describe('worker success', () => {
    jest
      .spyOn(api, 'getBook')
      .mockImplementation(() => Promise.resolve(dummyBook));

    const action = {
      type: BOOK_ACTION_TYPES.BOOK_FETCH.START,
      payload: { id: 1 },
    };
    const iteratorSaga = bookFetchSaga(action);

    it('puts fetchBookInProgress action', () => {
      expect(iteratorSaga.next().value).toEqual(put(fetchBookInProgress()));
    });

    it('calls get book request', () => {
      expect(iteratorSaga.next().value).toEqual(
        call(api.getBook, action.payload.id)
      );
    });

    it('puts fetchBookSuccess action', () => {
      expect(iteratorSaga.next().value).toEqual(put(fetchBookSuccess()));
    });
  });

  //   describe('worker error', () => {
  //       jest.spyOn(api, 'getBook')
  //           .mockImplementation(() => Promise.reject());
  //
  //       const action = { type: BOOK_ACTION_TYPES.BOOK_FETCH.START, payload: {id: 1}};
  //       const iteratorSaga = bookFetchSaga(action);
  //
  //       it('puts fetchBookInProgress action', () => {
  //         expect(iteratorSaga.next().value).toEqual(put(fetchBookInProgress()));
  //       });
  //
  //       it('calls get book request', () => {
  //         expect(iteratorSaga.next().value).toEqual(call(api.getBook, action.payload.id));
  //       });
  //
  //       it('puts fetchBookError action', () => {
  //         expect(iteratorSaga.next().value).toEqual(put(fetchBookError('Something went wrong')));
  //       });
  // });
});

describe('testing book create saga', () => {
  describe('watcher', () => {
    // const iterator = cloneableGenerator(bookFetchSaga)(
    //   fetchBookStart({ payload: { id: 1 } })
    // );

    const watcher = bookWatcher.bookCreateWatcher();

    it('should wait for every BOOK_CREATE.START action and call bookCreateSaga', () => {
      expect(watcher.next().value).toEqual(
        takeLatest(BOOK_ACTION_TYPES.BOOK_CREATE.START, bookCreateSaga)
      );
    });

    it('should be done on next iteration', () => {
      expect(watcher.next().done).toBeTruthy();
    });
  });

  describe('worker', () => {
    sinon.stub(api, 'createBook').callsFake(() => ({
      json: () => dummyBook,
    }));

    const action = {
      type: BOOK_ACTION_TYPES.BOOK_CREATE.START,
      payload: { book: dummyBook },
    };
    const iteratorSaga = bookCreateSaga(action);

    it('puts createBookInProgress action', () => {
      expect(iteratorSaga.next().value).toEqual(put(createBookInProgress()));
    });

    it('calls create book request', () => {
      expect(iteratorSaga.next().value).toEqual(
        call(api.createBook, action.payload.book)
      );
    });

    it('puts createBookSuccess action', () => {
      expect(iteratorSaga.next().value).toEqual(put(createBookSuccess()));
    });
  });
});

describe('testing book update saga', () => {
  describe('watcher', () => {
    const iteratorWatcher = bookWatcher.bookUpdateWatcher();

    it('should wait for every BOOK_UPDATE.START action and call bookUpdateSaga', () => {
      expect(iteratorWatcher.next().value).toEqual(
        takeLatest(BOOK_ACTION_TYPES.BOOK_UPDATE.START, bookUpdateSaga)
      );
    });

    it('should be done on next iteration', () => {
      expect(iteratorWatcher.next().done).toBeTruthy();
    });
  });

  describe('worker', () => {
    let updateBook;

    beforeEach(function () {
      updateBook = sinon.stub(api, 'updateBook');
      updateBook.withArgs(dummyBook).returns(Promise.resolve(dummyBook));
    });

    afterEach(function () {
      updateBook.restore();
    });

    const action = {
      type: BOOK_ACTION_TYPES.BOOK_UPDATE.START,
      payload: { book: dummyBook },
    };
    const iteratorSaga = bookUpdateSaga(action);

    it('puts updateBookInProgress action', () => {
      expect(iteratorSaga.next().value).toEqual(put(updateBookInProgress()));
    });

    it('calls update book request', () => {
      expect(iteratorSaga.next().value).toEqual(
        call(api.updateBook, action.payload.book)
      );
    });

    it('puts updateBookSuccess action', () => {
      expect(iteratorSaga.next().value).toEqual(put(updateBookSuccess()));
    });
  });
});

describe('testing book delete saga', () => {
  describe('watcher', () => {
    const iteratorWatcher = bookWatcher.bookDeleteWatcher();

    it('should wait for every BOOK_DELETE.START action and call bookUpdateSaga', () => {
      expect(iteratorWatcher.next().value).toEqual(
        takeLatest(BOOK_ACTION_TYPES.BOOK_DELETE.START, bookDeleteSaga)
      );
    });

    it('should be done on next iteration', () => {
      expect(iteratorWatcher.next().done).toBeTruthy();
    });
  });

  describe('worker', () => {
    let apiMock;

    beforeEach(function () {
      apiMock = sinon.stub(api, 'deleteBook');
    });

    afterEach(function () {
      apiMock.restore();
    });

    const action = {
      type: BOOK_ACTION_TYPES.BOOK_DELETE.START,
      payload: { id: 1 },
    };
    const iteratorSaga = bookDeleteSaga(action);

    it('puts deleteBookInProgress action', () => {
      expect(iteratorSaga.next().value).toEqual(put(deleteBookInProgress()));
    });

    it('calls delete book request', () => {
      apiMock.withArgs(1).returns(Promise.resolve(1));
      expect(iteratorSaga.next().value).toEqual(
        call(api.deleteBook, action.payload.id)
      );
    });

    it('puts deleteBookSuccess action', () => {
      expect(iteratorSaga.next().value).toEqual(put(deleteBookSuccess()));
    });
  });
});
