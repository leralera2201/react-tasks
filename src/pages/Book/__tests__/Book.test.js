import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { Book } from "../Book";

describe("book", () => {
  const props = {
    loading: true,
    error: null,
    book: null,
    deleteSuccess: false,
    getBookById: () => {},
    deleteBook: () => {},
    match: {
      params: {},
    },
    history: { push: jest.fn(), location: {}, listen: jest.fn() },
  };

  it("render with loading", () => {
    const wrapper = shallow(<Book {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("render no book", () => {
    props.loading = false;
    const wrapper = shallow(<Book {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("render book", () => {
    props.book = {
      title: "d",
      description: "d",
      excerpt: "d",
      publishDate: "2000-20-20",
      pageCount: 2,
      id: "1",
    };
    const wrapper = shallow(<Book {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("update book", () => {
    const wrapper = shallow(<Book {...props} />);
    const button = wrapper.find("#update-book").first();
    button.simulate("click");
    expect(props.history.push.mock.calls[0][0].pathname).toEqual(
      `/books/${props.book.id}/update`
    );
  });

  it("delete book", () => {
    window.confirm = jest.fn(() => true);
    const wrapper = shallow(<Book {...props} />);
    const button = wrapper.find("#delete-book").first();
    button.simulate("click");
    expect(window.confirm).toBeCalled();
    expect(props.history.push.mock.calls[0][0].pathname).toEqual(`/books`);
  });

  it("render with error", () => {
    props.error = "Some error";
    const wrapper = shallow(<Book {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

// describe('testing Book component', () => {
//   const props = {
//     loading: true,
//     error: null,
//     book: null,
//     deleteSuccess: false,
//     getBookById: () => {},
//     deleteBook: () => {},
//     match: {
//       params: {},
//     },
//     history: { push: jest.fn(), location: {}, listen: jest.fn() },
//   };
//
//   let wrapper;
//
//   beforeEach(() => {
//     wrapper = shallow(<Book {...props} />);
//   });
//
//   it('renders correctly', () => {
//     expect(wrapper).toMatchSnapshot();
//   });
//
//   it('render with loading', () => {
//     expect(wrapper.find(Loader)).toHaveLength(1);
//   });
//
//   it('render no book', () => {
//     wrapper.setProps({ loading: false });
//     expect(wrapper.find('#no-book')).toHaveLength(1);
//   });
//
//   // it('update book', () => {
//   //   const button = wrapper.find('#update-book');
//   //   button.simulate('click');
//   //   expect(props.history.push.mock.calls[0][0].pathname).toEqual(
//   //     `/books/${props.book.id}/update`
//   //   );
//   // });
//
//   // it('delete book', () => {
//   //   window.confirm = jest.fn(() => true);
//   //   const button = wrapper.find('#delete-book');
//   //   button.simulate('click');
//   //   expect(window.confirm).toBeCalled();
//   //   expect(props.history.push.mock.calls[0][0].pathname).toEqual(`/books`);
//   // });
//
//   it('render with error', () => {
//     wrapper.setProps({ error: 'Some error' });
//     expect(wrapper.find(Error)).toHaveLength(1);
//   });
// });
