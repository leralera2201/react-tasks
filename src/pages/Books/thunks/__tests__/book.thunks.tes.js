import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import {BOOKS_ACTION_TYPES} from "../../action-types/books.action-types";

import {fetchBooks} from "../book.thunks";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore();

describe('getBooks actions', () => {
    beforeEach(() => {
        store.clearActions();
    });
    it('dispatches BOOKS_FETCH.SUCCESS after a successfull API requets', () => {
        mock.onGet('/Books').reply(200,
            { response: [{
                    "id": 0,
                    "title": "string",
                    "description": "string",
                    "pageCount": 0,
                    "excerpt": "string",
                    "publishDate": "2020-12-29T14:51:06.408Z"
                }]
            })
        store.dispatch(fetchBooks()).then(() => {
            let expectedActions = [
                { type: BOOKS_ACTION_TYPES.BOOKS_FETCH.IN_PROGRESS },
                {
                    type: BOOKS_ACTION_TYPES.BOOKS_FETCH.SUCCESS,
                    payload: [{
                        "id": 0,
                        "title": "string",
                        "description": "string",
                        "pageCount": 0,
                        "excerpt": "string",
                        "publishDate": "2020-12-29T14:51:06.408Z"
                    }]
                }]
            expect(store.getActions()).toEqual(expectedActions)
        });
    });
    it('dispatches BOOKS_FETCH.ERROR after a FAILED API requets', () => {
        mock.onGet('/Books').reply(400, { error: { message: 'error message' } });
        store.dispatch(fetchBooks()).then(() => {
            let expectedActions = [
                { type: BOOKS_ACTION_TYPES.BOOKS_FETCH.IN_PROGRESS },
                {
                    type: BOOKS_ACTION_TYPES.BOOKS_FETCH.ERROR,
                    payload: 'error message'
                }
                ]
            expect(store.getActions()).toEqual(expectedActions)
        });
    });
});