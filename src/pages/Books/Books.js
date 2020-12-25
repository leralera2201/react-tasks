import React, { Component } from "react";
import { connect } from "react-redux";

import { Loader, BookCard, BooksPagination, Error } from "../../components";

import { getBooks, paginateBooks } from "./actions/books.actions";
import {
  bookItemsSelector,
  booksErrorSelector,
  booksLoadingSelector,
  booksPerPageSelector,
  currentBookItemsSelector,
  currentPageSelector,
} from "./selectors";

class Books extends Component {
  componentDidMount() {
    const { getAllBooks } = this.props;
    getAllBooks();
  }

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
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return (
      <div className="pt-5">
        {loading && <Loader />}
        {!loading && !error && currentBooks.length > 0 && (
          <div className="container">
            <div className="flex-space-between">
              {currentBooks.map((book) => (
                <BookCard book={book} key={book.id} />
              ))}
            </div>
            <BooksPagination
              currentPage={currentPage}
              paginate={paginate}
              pages={pages}
            />
          </div>
        )}
        {!error && !loading && booksLength === 0 && <div>No books</div>}
        {error && <Error error={error} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: booksLoadingSelector(state),
  books: bookItemsSelector(state),
  error: booksErrorSelector(state),
  currentPage: currentPageSelector(state),
  booksPerPage: booksPerPageSelector(state),
  currentBooks: currentBookItemsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  getAllBooks: () => dispatch(getBooks()),
  paginate: (page) => dispatch(paginateBooks(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Books);
