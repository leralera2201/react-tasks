import { createActionTypes } from '../../../store/action-types';

const USERS_ACTION_TYPES = {
  USERS_FETCH: createActionTypes('USERS_FETCH'),
  USERS_FILTER: 'USERS_FILTER',
  USERS_SEARCH: 'USERS_SEARCH',
  USERS_SORT: 'USERS_SORT',
};

export default USERS_ACTION_TYPES;
