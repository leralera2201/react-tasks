import { createSelector } from "reselect";
import { ACTION_STATUS } from '../../../store/action-types';

const bookRootStateSelector = (state) => state.bookRoot;

const booksStateSelector = createSelector(
    bookRootStateSelector,
    ({ books }) => books
);

const booksFetchSelector = createSelector(
    booksStateSelector,
    ({ item }) => item
);

export const booksFetchDataSelector = createSelector(
    booksFetchSelector,
    ({ data }) => data
);

export const booksFetchStatusSelector = createSelector(
    booksFetchSelector,
    ({ status }) => status
);

export const booksFetchErrorSelector = createSelector(
    booksFetchSelector,
    ({ error }) => error
);

export const booksFetchItemsSelector = createSelector(
    booksFetchDataSelector,
    ({ books }) => books
);

export const booksFetchCurrentItemsSelector = createSelector(
    booksFetchDataSelector,
    ({ currentBooks }) => currentBooks
);

export const booksFetchCurrentPageSelector = createSelector(
    booksFetchDataSelector,
    ({ currentPage }) => currentPage
);

export const booksFetchBooksPerPagePageSelector = createSelector(
    booksFetchDataSelector,
    ({ booksPerPage }) => booksPerPage
);

export const booksFetchIsStatusInProgress = createSelector(
    booksFetchStatusSelector,
    ( status ) => status === ACTION_STATUS.IN_PROGRESS
);
