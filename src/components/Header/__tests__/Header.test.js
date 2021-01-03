import React from 'react';
import {mount} from "enzyme";

import {componentWithRouter} from "../../../utils/routerUtils";

import Header from "../Header";

describe("Testing Header component", () => {
    it("Header will render", () => {
        const wrapper = mount(componentWithRouter());
        expect(wrapper.find(Header).length).toEqual(1);
    })

    it('Header text is Blog', () => {
        const wrapper = mount(componentWithRouter());
        const header = wrapper.find(Header);
        expect(header.find('.header-logo').first().text()).toEqual('Blog');
    });
})