import React from 'react';
import { Router } from 'react-router-dom';
import {mount, shallow} from "enzyme";

import BookCard from "../BookCard";

describe("Testing BookCard component", () => {
    const book = {
        id: "1",
        title: "a",
        description: "a"
    }
    it("BookCard will render", () => {
        const wrapper = shallow(<BookCard book={book}/>);
        expect(wrapper.length).toEqual(1);
    })

    it("BookCard check goToDetail method", () => {
        const historyMock = { push: jest.fn(), location: {}, listen: jest.fn() };
        const wrapper = mount(<Router history={historyMock}><BookCard book={book}/></Router>)
        const button =wrapper.find('button');
        button.simulate('click');
        expect(historyMock.push.mock.calls[0][0]).toEqual(`/books/${book.id}`);
    })
})