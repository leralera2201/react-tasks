import { ACTION_STATUS } from "../../../../store/action-types";

import {BOOK_ACTION_TYPES} from "../../../Book/action-types/book.action-types";

import {BOOKS_ACTION_TYPES} from "../../action-types/books.action-types";

import BooksReducer from '../books.reducer';

const initialState = {
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
};

describe('books reducer', () => {
    const books = [{
        title: "d",
        description: "d",
        excerpt: "d",
        publishDate: "2000-20-20",
        pageCount: 2,
        id: '1'
    }]
    const error = 'Some error';
    const page = 1;
    it('returns the initial state', () => {
        expect(BooksReducer(undefined, {})).toEqual(initialState);
    });

    it('fetch books in progress', () => {
        expect(BooksReducer(initialState,
            {type: BOOKS_ACTION_TYPES.BOOKS_FETCH.IN_PROGRESS})).toEqual({
            ...initialState,
            item: {
                ...initialState.item,
                status: ACTION_STATUS.IN_PROGRESS
            }
        });
    });

    it('fetch books success', () => {
        expect(BooksReducer(initialState,
            {type: BOOKS_ACTION_TYPES.BOOKS_FETCH.SUCCESS, payload: {books}})).toEqual({
            ...initialState,
            item: {
                ...initialState.item,
                data: {
                    ...initialState.item.data,
                    books
                },
                status: ACTION_STATUS.SUCCESS
            }
        });
    });

    it('fetch books error', () => {
        expect(BooksReducer(initialState,
            {type: BOOKS_ACTION_TYPES.BOOKS_FETCH.ERROR, payload: error})).toEqual({
            ...initialState,
            item: {
                ...initialState.item,
                data: null,
                status: ACTION_STATUS.ERROR,
                error
            }
        });
    });

    it('books paginate', () => {
        const { data } = initialState.item;
        const { booksPerPage, books } = initialState.item.data;
        const indexOfLastBook = page * booksPerPage;
        const indexOfFirstBook = indexOfLastBook - booksPerPage;
        const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
        expect(BooksReducer(initialState,
            {type: BOOKS_ACTION_TYPES.BOOKS_PAGINATE, payload: {page}})).toEqual({
            ...initialState,
            item: {
                ...initialState.item,
                data: {
                    ...data,
                    currentBooks,
                    currentPage: page
                }
            }
        });
    });

    it('create book success', () => {
        const { data } = initialState.item;
        expect(BooksReducer(initialState,
            {type: BOOK_ACTION_TYPES.BOOK_CREATE.SUCCESS, payload: {book: books[0]}})).toEqual({
            ...initialState,
            item: {
                ...initialState.item,
                data: {
                    ...data,
                    books: [
                        ...data.books,
                        books[0]
                    ]
                }
            }
        });
    });

    it('update book success', () => {
        const { data } = initialState.item;
        const book = books[0];
        const { books: oldBooks } = data;
        const bookToUpdateIndex = oldBooks.findIndex(bookItem => bookItem.id === book.id);
        if(bookToUpdateIndex >= 0) {
            oldBooks[bookToUpdateIndex] = book;
        };
        const item = {
            ...initialState.item,
            data: {
                ...data,
                books: oldBooks
            }
        }
        expect(BooksReducer(initialState,
            {type: BOOK_ACTION_TYPES.BOOK_UPDATE.SUCCESS, payload: {book: books[0]}})).toEqual({
            ...initialState,
            item
        });
    });

    it('delete book success', () => {
        const { data } = initialState.item;
        const { id } = books[0];
        const oldBooks = data.books.filter(book => book.id !== id);
        expect(BooksReducer(initialState,
            {type: BOOK_ACTION_TYPES.BOOK_DELETE.SUCCESS, payload: {id}})).toEqual({
            ...initialState,
            item: {
                ...initialState.item,
                data: {
                    ...data,
                    books: oldBooks
                }
            }
        });
    });
})