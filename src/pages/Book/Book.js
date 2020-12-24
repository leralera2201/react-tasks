import React, { Component } from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { connect } from "react-redux";
import { formatDistance } from "date-fns";

import { getBook } from "../../store/actions/book.actions";
import { Loader, Error } from "../../components";

class Book extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getBook(this.props.match.params.id);
  }

  render() {
    const { loading, book, error } = this.props.books;

    return (
      <div className={"container pt-5"}>
        {loading ? (
          <Loader />
        ) : error ? (
          <Error error={error} />
        ) : book ? (
          <Card>
            <CardBody>
              <CardTitle tag="h3">{book.title}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {book.description}
              </CardSubtitle>
              <CardText>{book.excerpt}</CardText>
              <CardText tag={"h5"}>Page count: {book.pageCount}</CardText>
              <CardText>
                <small className="text-muted">
                  {formatDistance(new Date(), new Date(book.publishDate))}
                </small>
              </CardText>
            </CardBody>
          </Card>
        ) : (
          <div>No such book</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
});

export default connect(mapStateToProps, { getBook })(Book);
