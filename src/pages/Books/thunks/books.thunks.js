import { getBooks } from '@api/books';
import notifier from '../../../helpers/Notifier';

import {
  fetchBooksError,
  fetchBooksInProgress,
  fetchBooksSuccess,
  paginateBooks,
} from '../actions/books.actions';

const fetchBooks = () => (dispatch) => {
  dispatch(fetchBooksInProgress());
  return getBooks()
    .then((data) => {
      dispatch(fetchBooksSuccess(data));
      dispatch(paginateBooks());
    })
    .catch((e) => {
      dispatch(fetchBooksError(e));
      notifier.notifyError('Something went wrong');
    });
};

export default fetchBooks;
