import React, { Component } from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { connect } from "react-redux";
import moment from "moment";

import { Loader, Error } from "../../components";

import { getBook } from "./actions/book.actions";
import {
  bookErrorSelector,
  bookItemSelector,
  bookLoadingSelector,
} from "./selectors";

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
  book: bookItemSelector(state),
  loading: bookLoadingSelector(state),
  error: bookErrorSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  getBookById: (id) => dispatch(getBook(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Book);
