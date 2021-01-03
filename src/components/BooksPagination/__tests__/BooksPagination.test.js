import React from 'react';
import {mount, shallow} from "enzyme";

import BooksPagination from "../BooksPagination";

describe("Testing BooksPagination component", () => {
    const props = {
        onPaginate: jest.fn(),
        pages: [1,2,3],
        currentPage: 1
    }

    it("BooksPagination will render", () => {
        const wrapper = mount(<BooksPagination {...props} />)
        expect(wrapper.length).toEqual(1);
    })

    it("BooksPagination prev will not render", () => {
        const wrapper = mount(<BooksPagination {...props}/>)
        wrapper.find('#paginate-prev').first().simulate('click');
        expect(props.onPaginate).toHaveBeenCalledTimes(0);
    })

    it("BooksPagination prev will render", () => {
        props.currentPage = 2;
        const wrapper = mount(<BooksPagination {...props}/>)
        wrapper.find('#paginate-prev').first().simulate('click');
        expect(props.onPaginate).toHaveBeenCalledTimes(1);
    })

    it("BooksPagination next will render", () => {
        const wrapper = mount(<BooksPagination {...props}/>)
        wrapper.find('#paginate-next').first().simulate('click');
        expect(props.onPaginate).toHaveBeenCalledTimes(1);
    })

    it("BooksPagination next will not render", () => {
        props.currentPage = 3;
        const wrapper = mount(<BooksPagination {...props}/>)
        wrapper.find('#paginate-next').first().simulate('click');
        expect(props.onPaginate).toHaveBeenCalledTimes(0);
    })
})