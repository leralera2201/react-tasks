import React from 'react';
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";

import Error from "../Error";

describe("Testing Error component", () => {

    it('renders correctly', () => {
        const wrapper = shallow(<Error error="Some error" />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
})