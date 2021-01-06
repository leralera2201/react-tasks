import React from "react";
import { shallow } from "enzyme";

import Field from "../Field";
import toJson from "enzyme-to-json";

describe("Testing Field component", () => {
  const props = {
    type: "text",
    label: "label",
    name: "name",
    value: "value",
    onChange: jest.fn(),
  };

  it("renders correctly", () => {
    const wrapper = shallow(<Field {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
