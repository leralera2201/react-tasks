import React, { Component } from "react";
import { Button, Form } from "reactstrap";
import { connect } from "react-redux";

import Field from "@components/Field";

import { createBookStart, updateBookStart } from "../actions/book.actions";

const fields = {
  title: {
    label: "Title",
    type: "text",
    value: "",
  },
  description: {
    label: "Description",
    type: "text",
    value: "",
  },
  excerpt: {
    label: "Excerpt",
    type: "text",
    value: "",
  },
  publishDate: {
    label: "Publish Date",
    type: "date",
    value: "",
  },
  pageCount: {
    label: "Page Count",
    type: "number",
    value: "",
  },
};

export class BookForm extends Component {
  state = {
    ...fields,
  };

  componentDidMount() {
    const {
      location: { state },
    } = this.props;
    if (state && state.book) {
      Object.entries(state.book).forEach(([fieldName, value]) => {
        this.setState({
          [fieldName]: {
            ...this.state[fieldName],
            value,
          },
        });
      });
    }
  }

  changeHandler = (event) => {
    const { name, value } = event.target;
    const data = this.state;
    data[name] = { ...data[name], value };

    this.setState({ ...data });
  };

  submitHandler = () => {
    const {
      createBook,
      updateBook,
      history,
      match: {
        params: { id },
      },
    } = this.props;
    const data = Object.entries(this.state).reduce((result, field) => {
      const [fieldName, { value }] = field;
      result[fieldName] = value;
      return result;
    }, {});
    if (id) {
      updateBook(data);
    } else {
      createBook(data);
    }
    this.setState({ ...fields });
    history.push({
      pathname: "/books",
      state: { withoutFetch: true },
    });
  };

  render() {
    const data = this.state;
    const {
      match: {
        params: { id },
      },
    } = this.props;
    return (
      <div className="container pt-5">
        <Form>
          {Object.entries(data).map(([fieldName, field]) => (
            <Field
              key={fieldName}
              type={field.type}
              label={field.label}
              name={fieldName}
              value={field.value}
              onChange={this.changeHandler}
            />
          ))}
          <Button onClick={this.submitHandler}>{id ? "Update" : "Add"}</Button>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => dispatch(createBookStart(book)),
  updateBook: (book) => dispatch(updateBookStart(book)),
});

export default connect(null, mapDispatchToProps)(BookForm);
