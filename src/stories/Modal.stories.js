import React from "react";

import Modal from "@components/Modal";

export default {
  title: "Example/Modal",
  component: Modal,
};

const Template = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Default",
  type: "default",
};

export const Center = Template.bind({});
Center.args = {
  label: "Center",
  type: "center",
};

export const Left = Template.bind({});
Left.args = {
  label: "Left",
  type: "left",
};

export const Right = Template.bind({});
Right.args = {
  label: "Right",
  type: "right",
};

export const Top = Template.bind({});
Top.args = {
  label: "Top",
  type: "top",
};

export const Bottom = Template.bind({});
Bottom.args = {
  label: "Bottom",
  type: "bottom",
};
