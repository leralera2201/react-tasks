import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import * as api from "@api/books";

import { fetchBooksInProgress } from "../../actions/books.actions";
import { BOOKS_ACTION_TYPES } from "../../action-types/books.action-types";

import { fetchBooks } from "../books.thunks";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

function findAction(store, type) {
  return store.getActions().find((action) => action.type === type);
}

function getAction(store, type) {
  const action = findAction(store, type);
  return Promise.resolve(action);
}

const dummyBooks = [
  {
    id: 0,
    title: "string",
    description: "string",
    pageCount: 0,
    excerpt: "string",
    publishDate: "2020-12-30T16:01:13.371Z",
  },
];

describe("getBooks", () => {
  it("starts request and return response results", async () => {
    jest
      .spyOn(api, "getBooks")
      .mockImplementation(() => Promise.resolve(dummyBooks));

    const store = mockStore();
    await store.dispatch(fetchBooks());
    const actionRequest = store.getActions()[0];
    expect(actionRequest).toEqual(fetchBooksInProgress());

    const actionTypeRequest = await getAction(
      store,
      BOOKS_ACTION_TYPES.BOOKS_FETCH.IN_PROGRESS
    );
    const actionTypeSuccess = await getAction(
      store,
      BOOKS_ACTION_TYPES.BOOKS_FETCH.SUCCESS
    );
    const actionTypePaginate = await getAction(
      store,
      BOOKS_ACTION_TYPES.BOOKS_PAGINATE
    );

    expect(actionTypeRequest).toHaveProperty(
      "type",
      BOOKS_ACTION_TYPES.BOOKS_FETCH.IN_PROGRESS
    );

    expect(actionTypeSuccess).toHaveProperty(
      "type",
      BOOKS_ACTION_TYPES.BOOKS_FETCH.SUCCESS
    );

    expect(actionTypePaginate).toHaveProperty(
      "type",
      BOOKS_ACTION_TYPES.BOOKS_PAGINATE
    );
  });

  it("starts request and return error", async () => {
    jest.spyOn(api, "getBooks").mockImplementation(() => Promise.reject());

    const store = mockStore();
    await store.dispatch(fetchBooks());

    const actionTypeRequest = await getAction(
      store,
      BOOKS_ACTION_TYPES.BOOKS_FETCH.IN_PROGRESS
    );
    const actionTypeError = await getAction(
      store,
      BOOKS_ACTION_TYPES.BOOKS_FETCH.ERROR
    );

    expect(actionTypeRequest).toHaveProperty(
      "type",
      BOOKS_ACTION_TYPES.BOOKS_FETCH.IN_PROGRESS
    );

    expect(actionTypeError).toHaveProperty(
      "type",
      BOOKS_ACTION_TYPES.BOOKS_FETCH.ERROR
    );
  });
});
