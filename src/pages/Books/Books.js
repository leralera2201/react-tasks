import React, { Component } from "react";
import { connect } from "react-redux";

import { getBooks } from "../../store/actions/book.actions";
import { Loader, BookCard, BooksPagination, Error } from "../../components";

class Books extends Component {
  state = {
    currentPage: 1,
    booksPerPage: 20,
  };

  componentDidMount() {
    const { getBooks } = this.props;
    getBooks();
   }

  paginate = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const { loading, books, error } = this.props.books;
    const { booksPerPage, currentPage } = this.state;
    // TODO: Move to REDUX !
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

    return (
      <div className="pt-5">
        { loading && <Loader />}
        {!loading && !error && currentBooks.length > 0 && (
          <div className={"container"}>
            <div className={"flex-space-between"}>
              {currentBooks.map((book) => (
                <BookCard book={book} key={book.id} />
              ))}
            </div>
            <BooksPagination
              booksPerPage={booksPerPage}
              currentPage={currentPage}
              paginate={this.paginate}
              totalBooks={books.length}
            />
          </div>)}
        { !error && !loading && books.length === 0 && <div>No books</div> }
        { error && <Error error={error} /> }
      </div>
    );
  }
}

// TODO: redux-resellect
const mapStateToProps = (state) => ({
  // books
  // loading
  // error
  books: state.books,
});

// TODO: mapDispatchToProps
// const mapDispatchToProps = (state) => ({
//   books: state.books,
// });

export default connect(mapStateToProps, { getBooks })(Books);
