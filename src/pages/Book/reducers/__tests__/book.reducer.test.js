import { ACTION_STATUS } from "../../../../store/action-types";

import { BOOK_ACTION_TYPES } from "../../action-types/book.action-types";
import BookReducer from "../../reducers/book.reducer";

const initialState = {
  item: {
    data: {},
    status: ACTION_STATUS.NOT_STARTED,
    error: null,
  },
  update: {
    status: ACTION_STATUS.NOT_STARTED,
    error: null,
  },
  create: {
    status: ACTION_STATUS.NOT_STARTED,
    error: null,
  },
  delete: {
    status: ACTION_STATUS.NOT_STARTED,
    error: null,
  },
};

describe("book reducer", () => {
  const book = {
    title: "d",
    description: "d",
    excerpt: "d",
    publishDate: "2000-20-20",
    pageCount: 2,
    id: "1",
  };
  const error = "Some error";

  it("returns the initial state", () => {
    expect(BookReducer(undefined, {})).toEqual(initialState);
  });

  it("fetch book in progress", () => {
    expect(
      BookReducer(initialState, {
        type: BOOK_ACTION_TYPES.BOOK_FETCH.IN_PROGRESS,
      })
    ).toEqual({
      ...initialState,
      item: {
        ...initialState.item,
        status: ACTION_STATUS.IN_PROGRESS,
      },
    });
  });

  it("fetch book success", () => {
    expect(
      BookReducer(initialState, {
        type: BOOK_ACTION_TYPES.BOOK_FETCH.SUCCESS,
        payload: { book },
      })
    ).toEqual({
      ...initialState,
      item: {
        ...initialState.item,
        data: book,
        status: ACTION_STATUS.SUCCESS,
      },
    });
  });

  it("fetch book error", () => {
    expect(
      BookReducer(initialState, {
        type: BOOK_ACTION_TYPES.BOOK_FETCH.ERROR,
        payload: error,
      })
    ).toEqual({
      ...initialState,
      item: {
        ...initialState.item,
        data: null,
        status: ACTION_STATUS.ERROR,
        error,
      },
    });
  });

  it("create book in progress", () => {
    expect(
      BookReducer(initialState, {
        type: BOOK_ACTION_TYPES.BOOK_CREATE.IN_PROGRESS,
      })
    ).toEqual({
      ...initialState,
      create: {
        ...initialState.create,
        status: ACTION_STATUS.IN_PROGRESS,
      },
    });
  });

  it("create book success", () => {
    expect(
      BookReducer(initialState, {
        type: BOOK_ACTION_TYPES.BOOK_CREATE.SUCCESS,
        payload: { book },
      })
    ).toEqual({
      ...initialState,
      create: {
        ...initialState.create,
        status: ACTION_STATUS.SUCCESS,
      },
    });
  });

  it("create book error", () => {
    expect(
      BookReducer(initialState, {
        type: BOOK_ACTION_TYPES.BOOK_CREATE.ERROR,
        payload: error,
      })
    ).toEqual({
      ...initialState,
      create: {
        ...initialState.create,
        status: ACTION_STATUS.ERROR,
        error,
      },
    });
  });

  it("update book in progress", () => {
    expect(
      BookReducer(initialState, {
        type: BOOK_ACTION_TYPES.BOOK_UPDATE.IN_PROGRESS,
      })
    ).toEqual({
      ...initialState,
      update: {
        ...initialState.update,
        status: ACTION_STATUS.IN_PROGRESS,
      },
    });
  });

  it("update book success", () => {
    expect(
      BookReducer(initialState, {
        type: BOOK_ACTION_TYPES.BOOK_UPDATE.SUCCESS,
        payload: { book },
      })
    ).toEqual({
      ...initialState,
      update: {
        ...initialState.update,
        status: ACTION_STATUS.SUCCESS,
      },
    });
  });

  it("update book error", () => {
    expect(
      BookReducer(initialState, {
        type: BOOK_ACTION_TYPES.BOOK_UPDATE.ERROR,
        payload: error,
      })
    ).toEqual({
      ...initialState,
      update: {
        ...initialState.update,
        status: ACTION_STATUS.ERROR,
        error,
      },
    });
  });

  it("delete book in progress", () => {
    expect(
      BookReducer(initialState, {
        type: BOOK_ACTION_TYPES.BOOK_DELETE.IN_PROGRESS,
      })
    ).toEqual({
      ...initialState,
      delete: {
        ...initialState.delete,
        status: ACTION_STATUS.IN_PROGRESS,
      },
    });
  });

  it("delete book success", () => {
    expect(
      BookReducer(initialState, {
        type: BOOK_ACTION_TYPES.BOOK_DELETE.SUCCESS,
        payload: { id: book.id },
      })
    ).toEqual({
      ...initialState,
      delete: {
        ...initialState.delete,
        status: ACTION_STATUS.SUCCESS,
      },
    });
  });

  it("delete book error", () => {
    expect(
      BookReducer(initialState, {
        type: BOOK_ACTION_TYPES.BOOK_DELETE.ERROR,
        payload: error,
      })
    ).toEqual({
      ...initialState,
      delete: {
        ...initialState.delete,
        status: ACTION_STATUS.ERROR,
        error,
      },
    });
  });
});
