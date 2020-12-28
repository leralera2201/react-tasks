import { BOOK_ACTION_TYPES } from "../action-types/book.action-types";
import { ACTION_STATUS } from '../../../store/action-types';

const initialState = {
  item: {
    data: {},
    status: ACTION_STATUS.NOT_STARTED,
    error: null
  },
  update: {
    status: ACTION_STATUS.NOT_STARTED,
    error: null
  },
  create: {
    status: ACTION_STATUS.NOT_STARTED,
    error: null
  },
  delete: {
    status: ACTION_STATUS.NOT_STARTED,
    error: null
  }
};

const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_ACTION_TYPES.BOOK_FETCH.IN_PROGRESS: {
      return {
        ...state,
        item: {
          ...state.item,
          status: ACTION_STATUS.IN_PROGRESS
        }
      };
    }
    case BOOK_ACTION_TYPES.BOOK_FETCH.SUCCESS: {
      const { book } = action.payload;
      return {
        ...state,
        item: {
          ...state.item,
          data: book,
          status: ACTION_STATUS.SUCCESS
        }
      };
    }
    case BOOK_ACTION_TYPES.BOOK_FETCH.ERROR: {
      return {
        ...state,
        item: {
          ...state.item,
          data: null,
          status: ACTION_STATUS.ERROR,
          error: action.payload
        }
      };
    }
    case BOOK_ACTION_TYPES.BOOK_CREATE.IN_PROGRESS: {
      return {
        ...state,
        create: {
          ...state.create,
          status: ACTION_STATUS.IN_PROGRESS
        }
      };
    }
    case BOOK_ACTION_TYPES.BOOK_CREATE.SUCCESS: {
      return {
        ...state,
        create: {
          ...state.create,
          status: ACTION_STATUS.SUCCESS
        }
      };
    }
    case BOOK_ACTION_TYPES.BOOK_CREATE.ERROR: {
      return {
        ...state,
        create: {
          ...state.create,
          status: ACTION_STATUS.ERROR,
          error: action.payload
        }
      };
    }
    case BOOK_ACTION_TYPES.BOOK_UPDATE.IN_PROGRESS: {
      return {
        ...state,
        update: {
          ...state.update,
          status: ACTION_STATUS.IN_PROGRESS
        }
      };
    }
    case BOOK_ACTION_TYPES.BOOK_UPDATE.SUCCESS: {
      return {
        ...state,
        update: {
          ...state.update,
          status: ACTION_STATUS.SUCCESS
        }
      };
    }
    case BOOK_ACTION_TYPES.BOOK_UPDATE.ERROR: {
      return {
        ...state,
        update: {
          ...state.update,
          status: ACTION_STATUS.ERROR,
          error: action.payload
        }
      };
    }
    case BOOK_ACTION_TYPES.BOOK_DELETE.IN_PROGRESS: {
      return {
        ...state,
        delete: {
          ...state.delete,
          status: ACTION_STATUS.IN_PROGRESS
        }
      };
    }
    case BOOK_ACTION_TYPES.BOOK_DELETE.SUCCESS: {
      return {
        ...state,
        delete: {
          ...state.delete,
          status: ACTION_STATUS.SUCCESS
        }
      };
    }
    case BOOK_ACTION_TYPES.BOOK_DELETE.ERROR: {
      return {
        ...state,
        delete: {
          ...state.delete,
          status: ACTION_STATUS.ERROR,
          error: action.payload
        }
      };
    }
    default:
      return state;
    }
};

export default BookReducer;
