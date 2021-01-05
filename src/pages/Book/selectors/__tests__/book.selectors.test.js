import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {ACTION_STATUS} from "../../../../store/action-types";

import * as selectors from "../book.selectors";

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const initialState = {
    bookRoot: {
        book: {
            item: {
                data: {},
                status: ACTION_STATUS.NOT_STARTED,
                error: null
            },
            update: {
                status: ACTION_STATUS.NOT_STARTED,
                error: null
            },
            create: {
                status: ACTION_STATUS.NOT_STARTED,
                error: null
            },
            delete: {
                status: ACTION_STATUS.NOT_STARTED,
                error: null
            }
        }
    }
};

describe("books selectors", () => {
    let store;

    beforeEach(() => {
        store = mockStore(initialState)
    })

    it('returns bookRoot from the state', () => {
        const { bookRoot } = initialState;
        expect(selectors.bookRootStateSelector(store.getState())).toEqual(bookRoot)
    })

    it('returns boos from the state', () => {
        const { bookRoot: { book } } = initialState;
        expect(selectors.bookStateSelector(store.getState())).toEqual(book)
    })

    it('returns item from the state', () => {
        const { bookRoot: { book: { item } } } = initialState;
        expect(selectors.bookFetchSelector(store.getState())).toEqual(item)
    })

    it('returns item data from the state', () => {
        const { bookRoot: { book: { item: { data } } } } = initialState;
        expect(selectors.bookFetchDataSelector(store.getState())).toEqual(data)
    })

    it('returns item status from the state', () => {
        const { bookRoot: { book: { item: { status } } } } = initialState;
        expect(selectors.bookFetchStatusSelector(store.getState())).toEqual(status)
    })

    it('returns item error from the state', () => {
        const { bookRoot: { book: { item: { error } } } } = initialState;
        expect(selectors.bookFetchErrorSelector(store.getState())).toEqual(error)
    })

    it('returns status is loading from the state', () => {
        const { bookRoot: { book: { item: { status } } } } = initialState;
        const isStatusLoading = status === ACTION_STATUS.IN_PROGRESS;
        expect(selectors.bookFetchIsStatusInProgress(store.getState())).toEqual(isStatusLoading)
    })

    it('returns create block from the state', () => {
        const { bookRoot: { book: { create } } } = initialState;
        expect(selectors.bookCreateSelector(store.getState())).toEqual(create)
    })

    it('returns create status from the state', () => {
        const { bookRoot: { book: { create: { status } } } } = initialState;
        expect(selectors.bookCreateStatusSelector(store.getState())).toEqual(status)
    })

    it('returns create error from the state', () => {
        const { bookRoot: { book: { create: { error } } } } = initialState;
        expect(selectors.bookCreateErrorSelector(store.getState())).toEqual(error)
    })

    it('returns create status is loading from the state', () => {
        const { bookRoot: { book: { create: { status } } } } = initialState;
        const isStatusLoading = status === ACTION_STATUS.IN_PROGRESS;
        expect(selectors.bookCreateIsStatusInProgress(store.getState())).toEqual(isStatusLoading)
    })

    it('returns update block from the state', () => {
        const { bookRoot: { book: { update } } } = initialState;
        expect(selectors.bookUpdateSelector(store.getState())).toEqual(update)
    })

    it('returns update status from the state', () => {
        const { bookRoot: { book: { update: { status } } } } = initialState;
        expect(selectors.bookUpdateStatusSelector(store.getState())).toEqual(status)
    })

    it('returns update error from the state', () => {
        const { bookRoot: { book: { update: { error } } } } = initialState;
        expect(selectors.bookUpdateErrorSelector(store.getState())).toEqual(error)
    })

    it('returns update status is loading from the state', () => {
        const { bookRoot: { book: { update: { status } } } } = initialState;
        const isStatusLoading = status === ACTION_STATUS.IN_PROGRESS;
        expect(selectors.bookUpdateIsStatusInProgress(store.getState())).toEqual(isStatusLoading)
    })

    it('returns delete block from the state', () => {
        const { bookRoot: { book} } = initialState;
        expect(selectors.bookDeleteSelector(store.getState())).toEqual(book.delete)
    })

    it('returns delete status from the state', () => {
        const { bookRoot: { book: { delete: { status } } } } = initialState;
        expect(selectors.bookDeleteStatusSelector(store.getState())).toEqual(status)
    })

    it('returns delete error from the state', () => {
        const { bookRoot: { book: { delete: { error } } } } = initialState;
        expect(selectors.bookDeleteErrorSelector(store.getState())).toEqual(error)
    })

    it('returns delete status is loading from the state', () => {
        const { bookRoot: { book: { delete: { status } } } } = initialState;
        const isStatusLoading = status === ACTION_STATUS.IN_PROGRESS;
        expect(selectors.bookDeleteIsStatusInProgress(store.getState())).toEqual(isStatusLoading)
    })

})