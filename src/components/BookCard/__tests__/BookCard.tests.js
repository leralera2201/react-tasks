import React from 'react';
import { Router } from 'react-router-dom';
import {shallow, mount} from "enzyme";
import toJson from 'enzyme-to-json';


import BookCard from "../BookCard";

describe("Testing BookCard component", () => {

    const book = {
        id: "1",
        title: "a",
        description: "a"
    }

    const historyMock = { push: jest.fn(), location: {}, listen: jest.fn() };

    it('renders correctly', () => {
        const wrapper = shallow(<Router history={historyMock}><BookCard book={book}/></Router>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("BookCard check goToDetail method", () => {
        const wrapper = mount(<Router history={historyMock}><BookCard book={book}/></Router>);
        const button = wrapper.find('#book-card-button').first();
        button.simulate('click');
        expect(historyMock.push.mock.calls[0][0]).toEqual(`/books/${book.id}`);
    })
})