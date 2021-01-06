import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import {
  Loader, BookCard, BooksPagination, Error,
} from '@components';

import { paginateBooks } from './actions/books.actions';
// import * as BookSelectors from './selectors/books.selectors';
import {
  booksFetchErrorSelector,
  booksFetchIsStatusInProgress,
  booksFetchItemsSelector,
  booksFetchCurrentPageSelector,
  booksFetchBooksPerPagePageSelector,
  booksFetchCurrentItemsSelector,
} from './selectors/books.selectors';
import fetchBooks from './thunks/books.thunks';

export class Books extends Component {
  componentDidMount() {
    const {
      getAllBooks,
      location: { state },
    } = this.props;
    if (state && state.withoutFetch) {
      return;
    }
    getAllBooks();
  }

  createBook = () => {
    const { history } = this.props;
    history.push('/books/create');
  };

  render() {
    const {
      loading,
      currentBooks,
      error,
      booksPerPage,
      currentPage,
      books,
      paginate,
    } = this.props;
    const booksLength = books.length;

    const pages = [];

    const totalPages = Math.ceil(booksLength / booksPerPage);
    for (let i = 1; i <= totalPages; i += 1) {
      pages.push(i);
    }

    return (
      <div className="pt-5">
        <div className="container">
          <Button onClick={this.createBook} id="create-button">
            Create book
          </Button>
          {loading && <Loader />}
          {!loading && !error && currentBooks.length > 0 && (
            <>
              <div className="flex-space-between">
                {currentBooks.map((book) => (
                  <BookCard book={book} key={book.id} />
                ))}
              </div>
              <BooksPagination
                currentPage={currentPage}
                onPaginate={paginate}
                pages={pages}
              />
            </>
          )}
          {!error && !loading && booksLength === 0 && (
            <div id="no-books">No books</div>
          )}
          {error && <Error error={error} />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: booksFetchIsStatusInProgress(state),
  books: booksFetchItemsSelector(state),
  error: booksFetchErrorSelector(state),
  currentPage: booksFetchCurrentPageSelector(state),
  booksPerPage: booksFetchBooksPerPagePageSelector(state),
  currentBooks: booksFetchCurrentItemsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  paginate: (page) => dispatch(paginateBooks(page)),
  getAllBooks: () => dispatch(fetchBooks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Books);
