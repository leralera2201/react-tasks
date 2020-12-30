import { runSaga } from 'redux-saga'
import * as api from './../../../../api/books'
import {bookFetchSaga} from "../book.sagas";
import {fetchBooksError, fetchBooksSuccess} from "../../../Books/actions/books.actions";
import {fetchBookError, fetchBookInProgress, fetchBookSuccess} from "../../actions/book.actions";

describe('makeAuthorsApiRequest', () => {
    it('should call api and dispatch success action', async () => {
        const dummyAuthors = {
            "id": 0,
            "title": "string",
            "description": "string",
            "pageCount": 0,
            "excerpt": "string",
            "publishDate": "2020-12-30T16:01:13.371Z"
        };
        const requestAuthors = jest.spyOn(api, 'getBook')
            .mockImplementation(() => Promise.resolve(dummyAuthors));
        const dispatched = [];
        const result = await runSaga({
            dispatch: (action) => dispatched.push(action),
        }, bookFetchSaga, {payload: {id: 1}});

        expect(requestAuthors).toHaveBeenCalledTimes(1);
        expect(dispatched).toEqual([fetchBookSuccess(dummyAuthors)]);
        requestAuthors.mockClear();
    });

    it('should call api and dispatch error action', async () => {
        const error = 'SomeError'
        const requestAuthors = jest.spyOn(api, 'getBook')
            .mockImplementation(() => Promise.reject());
        const dispatched = [];
        const result = await runSaga({
            dispatch: (action) => dispatched.push(action),
        }, bookFetchSaga, {payload: {id: 1}});

        expect(requestAuthors).toHaveBeenCalledTimes(1);
        expect(dispatched).toEqual([fetchBookInProgress(error)]);
        expect(dispatched).toEqual([fetchBookError(error)]);
        requestAuthors.mockClear();
    });
});