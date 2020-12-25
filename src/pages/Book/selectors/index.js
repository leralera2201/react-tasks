import { createSelector } from "reselect";

const bookSelector = (state) => state.book;

export const bookItemSelector = createSelector(
  bookSelector,
  ({ data }) => data
);

export const bookLoadingSelector = createSelector(
  bookSelector,
  ({ loading }) => loading
);

export const bookErrorSelector = createSelector(
  bookSelector,
  ({ error }) => error
);
