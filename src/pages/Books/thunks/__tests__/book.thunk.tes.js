// import configureMockStore from 'redux-mock-store'
// import thunk from 'redux-thunk'
// import expect from 'expect'
//
// import {fetchBooksInProgress} from "../../actions/books.actions";
// import {BOOKS_ACTION_TYPES} from "../../action-types/books.action-types";
//
// import {fetchBooks} from "../book.thunks";
//
// const middlewares = [thunk]
// const mockStore = configureMockStore(middlewares)
// const {BOOKS_FETCH} = BOOKS_ACTION_TYPES
//
// function findAction(store, type) {
//     return store.getActions().find(action => action.type === type);
// }
//
// export function getAction(store, type) {
//     const action = findAction(store, type);
//     return Promise.resolve(action);
// }
//
// describe('getBooks', () => {
//     it('starts request and return response results', async () => {
//         const store = mockStore();
//         await store.dispatch(fetchBooks());
//         const actionRequest = store.getActions()[0];
//         expect(actionRequest).toEqual(fetchBooksInProgress());
//         expect(await getAction(store, BOOKS_FETCH.SUCCESS)).toHaveProperty('type', BOOKS_FETCH.SUCCESS);
//         expect(await getAction(store, BOOKS_FETCH.IN_PROGRESS)).toHaveProperty('type', BOOKS_FETCH.IN_PROGRESS);
//         // expect(await getAction(store, BOOKS_FETCH.ERROR)).toHaveProperty('type', BOOKS_FETCH.ERROR);
//     });
// });
