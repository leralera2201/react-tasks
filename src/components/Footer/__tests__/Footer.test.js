import React from 'react';
import {mount} from "enzyme";

import {componentWithRouter} from "../../../utils/routerUtils";

import Footer from "../Footer";

describe("Testing Footer component", () => {

    it('Footer will render', () => {
        const wrapper = mount(componentWithRouter());
        expect(wrapper.find(Footer).length).toEqual(1);
    });
})