import { ACTION_STATUS } from '../../../store/action-types';

import USERS_ACTION_TYPES from '../action-types/users.action-types';

const initialState = {
  item: {
    data: {
      users: [],
      filteredUsers: [],
      sortedUsers: [],
    },
    status: ACTION_STATUS.NOT_STARTED,
    error: null,
  },
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_ACTION_TYPES.USERS_FETCH.IN_PROGRESS: {
      return {
        ...state,
        item: {
          ...state.item,
          status: ACTION_STATUS.IN_PROGRESS,
        },
      };
    }
    case USERS_ACTION_TYPES.USERS_FETCH.SUCCESS: {
      const { users } = action.payload;
      return {
        ...state,
        item: {
          ...state.item,
          data: {
            ...state.item.data,
            users,
            filteredUsers: users,
            sortedUsers: users,
          },
          status: ACTION_STATUS.SUCCESS,
        },
      };
    }
    case USERS_ACTION_TYPES.USERS_FETCH.ERROR: {
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
    case USERS_ACTION_TYPES.USERS_SEARCH: {
      const { word } = action.payload;
      const { data } = state.item;
      const { users } = data;
      const filteredUsers = word
        ? users.filter((user) => user.email.toLowerCase().startsWith(word))
        : users;
      return {
        ...state,
        item: {
          ...state.item,
          data: {
            ...data,
            filteredUsers,
            sortedUsers: filteredUsers,
          },
        },
      };
    }
    case USERS_ACTION_TYPES.USERS_SORT: {
      const { sorter } = action.payload;
      const { data } = state.item;
      const { filteredUsers } = data;
      const sortedUsers = [...filteredUsers];
      sortedUsers.sort(sorter);
      return {
        ...state,
        item: {
          ...state.item,
          data: {
            ...data,
            sortedUsers,
          },
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default UsersReducer;
