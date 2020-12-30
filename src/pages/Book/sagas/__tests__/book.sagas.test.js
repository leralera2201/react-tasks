import { runSaga } from 'redux-saga'

import * as api from './../../../../api/books'

import {BOOK_ACTION_TYPES} from "../../action-types/book.action-types";

import {bookCreateSaga, bookDeleteSaga, bookFetchSaga, bookUpdateSaga} from "../book.sagas";
import {
    createBookInProgress, createBookSuccess,
    deleteBookInProgress, deleteBookSuccess,
    fetchBookInProgress, fetchBookSuccess,
    updateBookInProgress, updateBookSuccess
} from "../../actions/book.actions";

const dummyBook = {
    "id": 0,
    "title": "string",
    "description": "string",
    "pageCount": 0,
    "excerpt": "string",
    "publishDate": "2020-12-30T16:01:13.371Z"
};

describe('make book fetch request', () => {
    it('get book successfully', async () => {
        const requestBook = jest.spyOn(api, 'getBook')
            .mockImplementation(() => Promise.resolve(dummyBook));
        const dispatched = [];
        await runSaga({
            dispatch: (action) => dispatched.push(action),
        }, bookFetchSaga, {payload: {id: 1}});
        expect(requestBook).toHaveBeenCalledTimes(1);
        expect(dispatched).toEqual([fetchBookInProgress(), fetchBookSuccess(dummyBook)]);
        requestBook.mockClear();
    });

    it('get book - error', async () => {
        const requestBook = jest.spyOn(api, 'getBook')
            .mockImplementation(() => Promise.reject());
        const dispatched = [];
        await runSaga({
            dispatch: (action) => dispatched.push(action),
        }, bookFetchSaga, {payload: {id: 1}});
        expect(requestBook).toHaveBeenCalledTimes(1);
        expect(dispatched[0]).toHaveProperty('type', BOOK_ACTION_TYPES.BOOK_FETCH.IN_PROGRESS)
        expect(dispatched[1]).toHaveProperty('type', BOOK_ACTION_TYPES.BOOK_FETCH.ERROR)
        requestBook.mockClear();
    });
});

describe('make book add request', () => {
    it('create book successfully', async () => {
        const requestBook = jest.spyOn(api, 'createBook')
            .mockImplementation(() => Promise.resolve(dummyBook));
        const dispatched = [];
        await runSaga({
            dispatch: (action) => dispatched.push(action),
        }, bookCreateSaga, {payload: {book: dummyBook}});
        expect(requestBook).toHaveBeenCalledTimes(1);
        expect(dispatched).toEqual([createBookInProgress(), createBookSuccess(dummyBook)]);
        requestBook.mockClear();
    });

    it('create book - error', async () => {
        const requestBook = jest.spyOn(api, 'createBook')
            .mockImplementation(() => Promise.reject());
        const dispatched = [];
        await runSaga({
            dispatch: (action) => dispatched.push(action),
        }, bookCreateSaga, {payload: {book: dummyBook}});
        expect(requestBook).toHaveBeenCalledTimes(1);
        expect(dispatched[0]).toHaveProperty('type', BOOK_ACTION_TYPES.BOOK_CREATE.IN_PROGRESS)
        expect(dispatched[1]).toHaveProperty('type', BOOK_ACTION_TYPES.BOOK_CREATE.ERROR)
        requestBook.mockClear();
    });
});

describe('make book update request', () => {
    it('update book successfully', async () => {
        const requestBook = jest.spyOn(api, 'updateBook')
            .mockImplementation(() => Promise.resolve(dummyBook));
        const dispatched = [];
        await runSaga({
            dispatch: (action) => dispatched.push(action),
        }, bookUpdateSaga, {payload: {book: dummyBook}});
        expect(requestBook).toHaveBeenCalledTimes(1);
        expect(dispatched).toEqual([updateBookInProgress(), updateBookSuccess(dummyBook)]);
        requestBook.mockClear();
    });

    it('update book - error', async () => {
        const requestBook = jest.spyOn(api, 'updateBook')
            .mockImplementation(() => Promise.reject());
        const dispatched = [];
        await runSaga({
            dispatch: (action) => dispatched.push(action),
        }, bookUpdateSaga, {payload: {book: dummyBook}});
        expect(requestBook).toHaveBeenCalledTimes(1);
        expect(dispatched[0]).toHaveProperty('type', BOOK_ACTION_TYPES.BOOK_UPDATE.IN_PROGRESS)
        expect(dispatched[1]).toHaveProperty('type', BOOK_ACTION_TYPES.BOOK_UPDATE.ERROR)
        requestBook.mockClear();
    });
});

describe('make book delete request', () => {
    const id = 1;
    it('delete book successfully', async () => {
        const requestBook = jest.spyOn(api, 'deleteBook')
            .mockImplementation(() => Promise.resolve(id));
        const dispatched = [];
        await runSaga({
            dispatch: (action) => dispatched.push(action),
        }, bookDeleteSaga, {payload: {id}});
        expect(requestBook).toHaveBeenCalledTimes(1);
        expect(dispatched).toEqual([deleteBookInProgress(), deleteBookSuccess(id)]);
        requestBook.mockClear();
    });

    it('delete book - error', async () => {
        const requestBook = jest.spyOn(api, 'deleteBook')
            .mockImplementation(() => Promise.reject());
        const dispatched = [];
        await runSaga({
            dispatch: (action) => dispatched.push(action),
        }, bookDeleteSaga, {payload: {id}});
        expect(requestBook).toHaveBeenCalledTimes(1);
        expect(dispatched[0]).toHaveProperty('type', BOOK_ACTION_TYPES.BOOK_DELETE.IN_PROGRESS)
        expect(dispatched[1]).toHaveProperty('type', BOOK_ACTION_TYPES.BOOK_DELETE.ERROR)
        requestBook.mockClear();
    });
});