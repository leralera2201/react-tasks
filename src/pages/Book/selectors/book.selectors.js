import { createSelector } from "reselect";
import { ACTION_STATUS } from '../../../store/action-types';

const bookRootStateSelector = (state) => state.bookRoot;

const bookStateSelector = createSelector(
    bookRootStateSelector,
    ({ book }) => book
);

const bookFetchSelector = createSelector(
    bookStateSelector,
    ({ item }) => item
);

export const bookFetchDataSelector = createSelector(
    bookFetchSelector,
  ({ data }) => data
);

export const bookFetchStatusSelector = createSelector(
    bookFetchSelector,
  ({ status }) => status
);

export const bookFetchErrorSelector = createSelector(
    bookFetchSelector,
  ({ error }) => error
);

export const bookFetchIsStatusInProgress = createSelector(
    bookFetchStatusSelector,
    ( status ) => status === ACTION_STATUS.IN_PROGRESS
);

const bookCreateSelector = createSelector(
    bookStateSelector,
    ({ create }) => create
);

const bookCreateStatusSelector = createSelector(
    bookCreateSelector,
    ({ status }) => status
);

export const bookCreateErrorSelector = createSelector(
    bookCreateSelector,
    ({ error }) => error
);

export const bookCreateIsStatusInProgress = createSelector(
    bookCreateStatusSelector,
    ( status ) => status === ACTION_STATUS.IN_PROGRESS
);

export const bookCreateIsStatusSuccess = createSelector(
    bookCreateStatusSelector,
    ( status ) => status === ACTION_STATUS.SUCCESS
);

export const bookUpdateSelector = createSelector(
    bookStateSelector,
    ({ update }) => update
);

export const bookUpdateStatusSelector = createSelector(
    bookUpdateSelector,
    ({ status }) => status
);

export const bookUpdateErrorSelector = createSelector(
    bookUpdateSelector,
    ({ error }) => error
);

export const bookUpdateIsStatusInProgress = createSelector(
    bookUpdateStatusSelector,
    ( status ) => status === ACTION_STATUS.IN_PROGRESS
);

export const bookUpdateIsStatusSuccess = createSelector(
    bookUpdateStatusSelector,
    ( status ) => status === ACTION_STATUS.SUCCESS
);

export const bookDeleteSelector = createSelector(
    bookStateSelector,
    ( item) => item.delete
);

export const bookDeleteStatusSelector = createSelector(
    bookDeleteSelector,
    ({ status }) => status
);

export const bookDeleteErrorSelector = createSelector(
    bookDeleteSelector,
    ({ error }) => error
);

export const bookDeleteIsStatusInProgress = createSelector(
    bookDeleteStatusSelector,
    ( status ) => status === ACTION_STATUS.IN_PROGRESS
);

export const bookDeleteIsStatusSuccess = createSelector(
    bookDeleteStatusSelector,
    ( status ) => status === ACTION_STATUS.SUCCESS
);
//
// export const bookStatusSuccessSelector = createSelector(
//     [bookCreateIsStatusSuccess, bookUpdateIsStatusSuccess],
//     (createSuccess, updateSuccess) => createSuccess || updateSuccess
// );
//
// export const bookStatusLoadingSelector = createSelector(
//     [bookCreateIsStatusInProgress, bookUpdateIsStatusInProgress],
//     (createLoading, updateLoading) => createLoading || updateLoading
// );
//
// export const bookErrorSelector = createSelector(
//     [bookCreateErrorSelector, bookUpdateErrorSelector()],
//     (createError, updateError) => createError || updateError
// );