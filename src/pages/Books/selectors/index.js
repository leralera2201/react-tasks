import { createSelector } from "reselect";

const booksSelector = (state) => state.books;

export const booksDataSelector = createSelector(
  booksSelector,
  ({ data }) => data
);

export const booksLoadingSelector = createSelector(
  booksSelector,
  ({ loading }) => loading
);

export const booksErrorSelector = createSelector(
  booksSelector,
  ({ error }) => error
);

export const bookItemsSelector = createSelector(
  booksDataSelector,
  ({ books }) => books
);

export const currentBookItemsSelector = createSelector(
  booksDataSelector,
  ({ currentBooks }) => currentBooks
);

export const currentPageSelector = createSelector(
  booksDataSelector,
  ({ currentPage }) => currentPage
);

export const booksPerPageSelector = createSelector(
  booksDataSelector,
  ({ booksPerPage }) => booksPerPage
);
