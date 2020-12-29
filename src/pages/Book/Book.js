import React, { Component } from "react";
import {Button, Card, CardBody, CardSubtitle, CardText, CardTitle} from "reactstrap";
import { connect } from "react-redux";
import moment from "moment";

import { Loader, Error } from "../../components";

import {deleteBookStart, fetchBookStart} from "./actions/book.actions";
import {
  bookDeleteIsStatusSuccess,
  bookFetchDataSelector,
  bookFetchErrorSelector,
  bookFetchIsStatusInProgress
} from "./selectors/book.selectors";


class Book extends Component {
  componentDidMount() {
    const {
      getBookById,
      match: {
        params: { id },
      },
    } = this.props;
    getBookById(id);
  }


  deleteBook = id => {
    const { deleteBook, history } = this.props;
    const confirmation = window.confirm('Are you sure?');
    if(confirmation){
      deleteBook(id);
      history.push({
        pathname: '/books',
        state: { withoutFetch: true }
      });
    }
  }

  updateBook = id => {
    const { book, history } = this.props;
    history.push({
      pathname: `/books/${id}/update`,
      state: { book }
    });
  }

  render() {
    const { loading, book, error } = this.props;

    return (
      <div className="container pt-5">
        {loading && <Loader />}
        {!loading && !error && book && (
          <Card>
            <CardBody>
              <CardTitle tag="h3">{book.title}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {book.description}
              </CardSubtitle>
              <CardText>{book.excerpt}</CardText>
              <CardText tag="h5">Page count: {book.pageCount}</CardText>
              <CardText>
                <small className="text-muted">
                  {moment(book.publishDate).fromNow()}
                </small>
              </CardText>
              <Button onClick={() => this.deleteBook(book.id)}>
                Delete this book
              </Button>
              <Button onClick={() => this.updateBook(book.id)}>
                Update this book
              </Button>
            </CardBody>
          </Card>
        )}
        {!error && !loading && !book && <div>No book</div>}
        {error && <Error error={error} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  book: bookFetchDataSelector(state),
  loading: bookFetchIsStatusInProgress(state),
  error: bookFetchErrorSelector(state),
  deleteSuccess: bookDeleteIsStatusSuccess(state)
});

const mapDispatchToProps = (dispatch) => ({
  getBookById: (id) => dispatch(fetchBookStart(id)),
  deleteBook: (id) => dispatch(deleteBookStart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Book);
