import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import { render } from "enzyme";
import toJson from "enzyme-to-json";

import Header from "../Header";

describe("Testing Header component", () => {

    it('renders correctly', () => {
        const wrapper = render(<Router><Header /></Router>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

})