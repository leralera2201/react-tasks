import React from 'react';
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";

import Loader from "../Loader";

describe("Testing Loader component", () => {

    it('renders correctly', () => {
        const wrapper = shallow(<Loader />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

})