import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import Alert from "../Alert";

describe("Testing Alert component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Alert message="Alert" color="danger" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
