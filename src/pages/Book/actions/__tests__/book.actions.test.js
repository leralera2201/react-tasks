import {BOOK_ACTION_TYPES} from '../../action-types/book.action-types'

import * as actions from '../book.actions'

describe('actions', () => {
    const book = {
        title: "d",
        description: "d",
        excerpt: "d",
        publishDate: "2000-20-20",
        pageCount: 2,
        id: '1'
    }
    const error = 'Some error';

    it('fetch book start', () => {
        const expectedAction = {
            type: BOOK_ACTION_TYPES.BOOK_FETCH.START,
            payload: { id: book.id }
        }
        expect(actions.fetchBookStart(book.id)).toEqual(expectedAction)
    })

    it('fetch book success', () => {
        const expectedAction = {
            type: BOOK_ACTION_TYPES.BOOK_FETCH.SUCCESS,
            payload: { book }
        }
        expect(actions.fetchBookSuccess(book)).toEqual(expectedAction)
    })

    it('fetch book in progress', () => {
        const expectedAction = {
            type: BOOK_ACTION_TYPES.BOOK_FETCH.IN_PROGRESS,
        }
        expect(actions.fetchBookInProgress()).toEqual(expectedAction)
    })

    it('fetch book error', () => {
        const expectedAction = {
            type: BOOK_ACTION_TYPES.BOOK_FETCH.ERROR,
            payload: error
        }
        expect(actions.fetchBookError(error)).toEqual(expectedAction)
    })

    it('create book start', () => {
        const expectedAction = {
            type: BOOK_ACTION_TYPES.BOOK_CREATE.START,
            payload: { book }
        }
        expect(actions.createBookStart(book)).toEqual(expectedAction)
    })

    it('create book success', () => {
        const expectedAction = {
            type: BOOK_ACTION_TYPES.BOOK_CREATE.SUCCESS,
            payload: { book }
        }
        expect(actions.createBookSuccess(book)).toEqual(expectedAction)
    })

    it('create book in progress', () => {
        const expectedAction = {
            type: BOOK_ACTION_TYPES.BOOK_CREATE.IN_PROGRESS,
        }
        expect(actions.createBookInProgress()).toEqual(expectedAction)
    })

    it('create book error', () => {
        const expectedAction = {
            type: BOOK_ACTION_TYPES.BOOK_CREATE.ERROR,
            payload: error
        }
        expect(actions.createBookError(error)).toEqual(expectedAction)
    })

    it('update book start', () => {
        const expectedAction = {
            type: BOOK_ACTION_TYPES.BOOK_UPDATE.START,
            payload: { book }
        }
        expect(actions.updateBookStart(book)).toEqual(expectedAction)
    })

    it('update book success', () => {
        const expectedAction = {
            type: BOOK_ACTION_TYPES.BOOK_UPDATE.SUCCESS,
            payload: { book }
        }
        expect(actions.updateBookSuccess(book)).toEqual(expectedAction)
    })

    it('update book in progress', () => {
        const expectedAction = {
            type: BOOK_ACTION_TYPES.BOOK_UPDATE.IN_PROGRESS,
        }
        expect(actions.updateBookInProgress()).toEqual(expectedAction)
    })

    it('update book error', () => {
        const expectedAction = {
            type: BOOK_ACTION_TYPES.BOOK_UPDATE.ERROR,
            payload: error
        }
        expect(actions.updateBookError(error)).toEqual(expectedAction)
    })

    it('delete book start', () => {
        const expectedAction = {
            type: BOOK_ACTION_TYPES.BOOK_DELETE.START,
            payload: { id: book.id }
        }
        expect(actions.deleteBookStart(book.id)).toEqual(expectedAction)
    })

    it('delete book success', () => {
        const expectedAction = {
            type: BOOK_ACTION_TYPES.BOOK_DELETE.SUCCESS,
            payload: { id: book.id }
        }
        expect(actions.deleteBookSuccess(book.id)).toEqual(expectedAction)
    })

    it('delete book in progress', () => {
        const expectedAction = {
            type: BOOK_ACTION_TYPES.BOOK_DELETE.IN_PROGRESS,
        }
        expect(actions.deleteBookInProgress()).toEqual(expectedAction)
    })

    it('delete book error', () => {
        const expectedAction = {
            type: BOOK_ACTION_TYPES.BOOK_DELETE.ERROR,
            payload: error
        }
        expect(actions.deleteBookError(error)).toEqual(expectedAction)
    })
})