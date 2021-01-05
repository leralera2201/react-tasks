import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {ACTION_STATUS} from "../../../../store/action-types";

import * as selectors from "../books.selectors";

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const initialState = {
    bookRoot: {
        books: {
            item: {
                data: {
                    books: [],
                    currentBooks: [],
                    currentPage: 1,
                    booksPerPage: 20,
                },
                status: ACTION_STATUS.NOT_STARTED,
                error: null
            },
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

    it('returns books from the state', () => {
        const { bookRoot: { books } } = initialState;
        expect(selectors.booksStateSelector(store.getState())).toEqual(books)
    })

    it('returns item from the state', () => {
        const { bookRoot: { books: { item } } } = initialState;
        expect(selectors.booksFetchSelector(store.getState())).toEqual(item)
    })

    it('returns item data from the state', () => {
        const { bookRoot: { books: { item: { data } } } } = initialState;
        expect(selectors.booksFetchDataSelector(store.getState())).toEqual(data)
    })

    it('returns item status from the state', () => {
        const { bookRoot: { books: { item: { status } } } } = initialState;
        expect(selectors.booksFetchStatusSelector(store.getState())).toEqual(status)
    })

    it('returns item error from the state', () => {
        const { bookRoot: { books: { item: { error } } } } = initialState;
        expect(selectors.booksFetchErrorSelector(store.getState())).toEqual(error)
    })

    it('returns item data books from the state', () => {
        const { bookRoot: { books: { item: { data: { books } } } } } = initialState;
        expect(selectors.booksFetchItemsSelector(store.getState())).toEqual(books)
    })

    it('returns current books from the state', () => {
        const { bookRoot: { books: { item: { data: { currentBooks } } } } } = initialState;
        expect(selectors.booksFetchCurrentItemsSelector(store.getState())).toEqual(currentBooks)
    })

    it('returns current page from the state', () => {
        const { bookRoot: { books: { item: { data: { currentPage } } } } } = initialState;
        expect(selectors.booksFetchCurrentPageSelector(store.getState())).toEqual(currentPage)
    })

    it('returns current books per page from the state', () => {
        const { bookRoot: { books: { item: { data: { booksPerPage } } } } } = initialState;
        expect(selectors.booksFetchBooksPerPagePageSelector(store.getState())).toEqual(booksPerPage)
    })

    it('returns is status loading from the state', () => {
        const {bookRoot: {books: {item: {status}}}} = initialState;
        const isStatusLoading = status === ACTION_STATUS.IN_PROGRESS;
        expect(selectors.booksFetchIsStatusInProgress(store.getState())).toEqual(isStatusLoading);
    })
})