import { createActionTypes } from '../../../store/action-types';

const BOOKS_ACTION_TYPES = {
  BOOKS_FETCH: createActionTypes('BOOKS_FETCH'),
  BOOKS_PAGINATE: 'BOOKS_PAGINATE',
};

export default BOOKS_ACTION_TYPES;
