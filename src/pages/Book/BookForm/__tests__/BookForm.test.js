import React from 'react';
import {mount} from "enzyme";
import {Provider} from "react-redux";
import store from "../../../../store/store";
import {componentWithRouter} from "../../../../utils/routerUtils";
import {BookForm} from "../BookForm";
import {Button} from "reactstrap";


describe("BookForm", () => {

    const props = {
        match: {
            params: {}
        },
        location: {
            state: {}
        },
        createBook: jest.fn(),
        updateBook: jest.fn(),
        history: { push: jest.fn(), location: {}, listen: jest.fn() }
    }

    it('should have 5 inputs', () => {
        const wrapper = mount(<BookForm {...props} />);
        expect(wrapper.find('input').length).toEqual(5)
    });

    it('should change the state after change the input value', () => {
        const newValue = 'testing component';
        const wrapper = mount(<BookForm {...props} />)
        const input = wrapper.find('input').first();
        input.simulate('change', { target: { name: 'title', value: newValue }});

        expect(wrapper.state().title.value).toEqual(newValue);
    });

    it('should change state', () => {
        props.location.state = {
            book: {
                title: "d",
                description: "d",
                excerpt: "d",
                publishDate: "2000-20-20",
                pageCount: 2,
                id: '1'
            }
        }
        const wrapper = mount(<BookForm {...props} />);
        expect(wrapper.state().title.value).toEqual(props.location.state.book.title);
    });

    it('should change path', () => {
        const wrapper = mount(<BookForm {...props} />)
        const button = wrapper.find('button').first();
        button.simulate('click');
        expect(props.history.push.mock.calls[0][0].pathname).toEqual('/books');
    });

    it("should update book", () => {
        props.match.params.id = '1';
        const wrapper = mount(<BookForm {...props} />)
        const button = wrapper.find('button').first();
        button.simulate('click');
        expect(props.updateBook).toBeCalled();
    })

})