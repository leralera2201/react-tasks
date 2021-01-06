import { createActionTypes } from "../../../store/action-types";

export const BOOK_ACTION_TYPES = {
  BOOK_FETCH: createActionTypes("BOOK_FETCH"),
  BOOK_CREATE: createActionTypes("BOOK_CREATE"),
  BOOK_UPDATE: createActionTypes("BOOK_UPDATE"),
  BOOK_DELETE: createActionTypes("BOOK_DELETE"),
};
