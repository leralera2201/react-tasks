import { createSelector } from 'reselect';

import { ACTION_STATUS } from '../../../store/action-types';

export const usersStateSelector = (state) => state.users;

export const usersFetchSelector = createSelector(
  usersStateSelector,
  ({ item }) => item,
);

export const usersFetchDataSelector = createSelector(
  usersFetchSelector,
  ({ data }) => data,
);

export const usersFetchDataItemSelector = createSelector(
  usersFetchDataSelector,
  ({ users }) => users,
);

export const usersFetchDataFilteredSelector = createSelector(
  usersFetchDataSelector,
  ({ filteredUsers }) => filteredUsers,
);

export const usersFetchDataSortedSelector = createSelector(
  usersFetchDataSelector,
  ({ sortedUsers }) => sortedUsers,
);

export const usersFetchStatusSelector = createSelector(
  usersFetchSelector,
  ({ status }) => status,
);

export const usersFetchErrorSelector = createSelector(
  usersFetchSelector,
  ({ error }) => error,
);

export const usersFetchIsStatusInProgress = createSelector(
  usersFetchStatusSelector,
  (status) => status === ACTION_STATUS.IN_PROGRESS,
);
