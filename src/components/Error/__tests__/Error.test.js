import React from 'react';
import {mount} from "enzyme";

import Error from "../Error";

describe("Testing Error component", () => {
    it("Error will render", () => {
        const wrapper = mount(<Error error="Error"/>);
        expect(wrapper.length).toEqual(1);
    })
})