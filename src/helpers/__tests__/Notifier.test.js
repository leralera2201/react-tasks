import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import App from "../../App";

import { notifier } from "../Notifier";

describe("Testing Notifier helpers", () => {
  it("error toast", () => {
    notifier.notifyError("Error");
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("success toast", () => {
    notifier.notifySuccess("Success");
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("warning toast", () => {
    notifier.notifyWarning("Warning");
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("info toast", () => {
    notifier.notifyInfo("Info");
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("secondary toast", () => {
    notifier.notifySecondary("Secondary");
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
