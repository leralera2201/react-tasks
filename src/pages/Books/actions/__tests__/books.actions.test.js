import { BOOKS_ACTION_TYPES } from '../../action-types/books.action-types';

import * as actions from '../books.actions';

describe('actions', () => {
  const books = [
    {
      title: 'd',
      description: 'd',
      excerpt: 'd',
      publishDate: '2000-20-20',
      pageCount: 2,
      id: '1',
    },
  ];
  const error = 'Some error';

  it('fetch books start', () => {
    const expectedAction = {
      type: BOOKS_ACTION_TYPES.BOOKS_FETCH.START,
    };
    expect(actions.fetchBooksStart()).toEqual(expectedAction);
  });

  it('fetch books success', () => {
    const expectedAction = {
      type: BOOKS_ACTION_TYPES.BOOKS_FETCH.SUCCESS,
      payload: { books },
    };
    expect(actions.fetchBooksSuccess(books)).toEqual(expectedAction);
  });

  it('fetch books in progress', () => {
    const expectedAction = {
      type: BOOKS_ACTION_TYPES.BOOKS_FETCH.IN_PROGRESS,
    };
    expect(actions.fetchBooksInProgress()).toEqual(expectedAction);
  });

  it('fetch books error', () => {
    const expectedAction = {
      type: BOOKS_ACTION_TYPES.BOOKS_FETCH.ERROR,
      payload: error,
    };
    expect(actions.fetchBooksError(error)).toEqual(expectedAction);
  });

  it('paginate books', () => {
    const expectedAction = {
      type: BOOKS_ACTION_TYPES.BOOKS_PAGINATE,
      payload: { page: 1 },
    };
    expect(actions.paginateBooks()).toEqual(expectedAction);
  });
});
