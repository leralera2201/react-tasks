import { ACTION_STATUS } from '../../../store/action-types';

import BOOK_ACTION_TYPES from '../../Book/action-types/book.action-types';

import BOOKS_ACTION_TYPES from '../action-types/books.action-types';

const initialState = {
  item: {
    data: {
      books: [],
      currentBooks: [],
      currentPage: 1,
      booksPerPage: 20,
    },
    status: ACTION_STATUS.NOT_STARTED,
    error: null,
  },
};

const BooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKS_ACTION_TYPES.BOOKS_FETCH.IN_PROGRESS: {
      return {
        ...state,
        item: {
          ...state.item,
          status: ACTION_STATUS.IN_PROGRESS,
        },
      };
    }
    case BOOKS_ACTION_TYPES.BOOKS_FETCH.SUCCESS: {
      const { data } = state.item;
      const { books } = action.payload;
      return {
        ...state,
        item: {
          ...state.item,
          data: {
            ...data,
            books,
          },
          status: ACTION_STATUS.SUCCESS,
        },
      };
    }
    case BOOKS_ACTION_TYPES.BOOKS_FETCH.ERROR: {
      return {
        ...state,
        item: {
          ...state.item,
          data: null,
          status: ACTION_STATUS.ERROR,
          error: action.payload,
        },
      };
    }
    case BOOKS_ACTION_TYPES.BOOKS_PAGINATE: {
      const { data } = state.item;
      const { page } = action.payload;
      const { booksPerPage, books } = state.item.data;
      const indexOfLastBook = page * booksPerPage;
      const indexOfFirstBook = indexOfLastBook - booksPerPage;
      const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
      return {
        ...state,
        item: {
          ...state.item,
          data: {
            ...data,
            currentBooks,
            currentPage: page,
          },
        },
      };
    }
    case BOOK_ACTION_TYPES.BOOK_CREATE.SUCCESS: {
      const { data } = state.item;
      const { book } = action.payload;
      return {
        ...state,
        item: {
          ...state.item,
          data: {
            ...data,
            books: [...data.books, book],
          },
        },
      };
    }
    case BOOK_ACTION_TYPES.BOOK_UPDATE.SUCCESS: {
      const { data } = state.item;
      const { books } = data;
      const { book } = action.payload;
      const bookToUpdateIndex = books.findIndex(
        (bookItem) => bookItem.id === book.id,
      );
      if (bookToUpdateIndex >= 0) {
        books[bookToUpdateIndex] = book;
      }
      const item = {
        ...state.item,
        data: {
          ...data,
          books,
        },
      };
      return {
        ...state,
        item,
      };
    }
    case BOOK_ACTION_TYPES.BOOK_DELETE.SUCCESS: {
      const { data } = state.item;
      const { id } = action.payload;
      const books = data.books.filter((book) => book.id !== id);
      return {
        ...state,
        item: {
          ...state.item,
          data: {
            ...data,
            books,
          },
        },
      };
    }
    default:
      return state;
  }
};

export default BooksReducer;
