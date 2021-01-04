import React from 'react';
import {shallow} from "enzyme";
import {Books} from "../Books";
import {Loader, Error, BookCard, BooksPagination} from "@components";

describe('Books', () => {
    const props = {
        loading: true,
        currentBooks: [],
        error: null,
        booksPerPage: 20,
        currentPage: 1,
        books: [],
        paginate: jest.fn(),
        getAllBooks: jest.fn(),
        location: {
            state: {}
        },
        history: { push: jest.fn(), location: {}, listen: jest.fn() }
    }
    it('render with loading', () => {
        const wrapper = shallow(<Books {...props} />)
        expect(wrapper.find(Loader)).toHaveLength(1)
    })

    it('render no books', () => {
        props.loading = false
        const wrapper = shallow(<Books {...props} />)
        expect(wrapper.find('#no-books')).toHaveLength(1) // .find + поиск по имени компонента
    })

    it('render books', () => {
        props.currentBooks = [{
            title: "d",
            description: "d",
            id: 'd'
        }]
        const wrapper = shallow(<Books {...props} />)
        expect(wrapper.find(BookCard)).toHaveLength(1)
        expect(wrapper.find(BooksPagination)).toHaveLength(1)
    })
    it('history change after create click', () => {
        const wrapper = shallow(<Books {...props} />)
        const button = wrapper.find('#create-button').first();
        button.simulate('click');
        expect(props.history.push.mock.calls[0][0]).toEqual('/books/create');
    })
    it('without fetch render', () => {
        props.location.state = { withoutFetch: true }
        const wrapper = shallow(<Books {...props} />)

        expect(props.getAllBooks).toBeCalledTimes(0);
    })


    it('render with error', () => {
        props.error = 'Some error'
        const wrapper = shallow(<Books {...props} />)
        expect(wrapper.find(Error)).toHaveLength(1)
    })

})
