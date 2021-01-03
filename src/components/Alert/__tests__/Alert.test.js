import React from 'react';
import {mount} from "enzyme";

import Alert from "../Alert";

describe("Testing Alert component", () => {
    it("Alert will render", () => {
        const wrapper = mount(<Alert message="Alert" color="danger"/>);
        expect(wrapper.length).toEqual(1);
    })
})