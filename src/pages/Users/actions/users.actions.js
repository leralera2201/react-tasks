import USERS_ACTION_TYPES from '../action-types/users.action-types';

export const fetchUsersInProgress = () => ({
  type: USERS_ACTION_TYPES.USERS_FETCH.IN_PROGRESS,
});

export const fetchUsersSuccess = (users) => ({
  type: USERS_ACTION_TYPES.USERS_FETCH.SUCCESS,
  payload: { users },
});

export const fetchUsersError = (error) => ({
  type: USERS_ACTION_TYPES.USERS_FETCH.ERROR,
  payload: error,
});

export const searchUsers = (word) => ({
  type: USERS_ACTION_TYPES.USERS_SEARCH,
  payload: { word },
});

export const sortUsers = (sorter) => ({
  type: USERS_ACTION_TYPES.USERS_SORT,
  payload: { sorter },
});
