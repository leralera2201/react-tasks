import CenterModal from "./CenterModal";
import Modal from "@components/Modal";

export default {
  title: "Example/Modal",
  component: Modal,
  argTypes: {
    wrapper: { table: { disable: true } },
  },
};

export const Centered = (args) => <Modal {...args} />;
Centered.args = {
  wrapper: CenterModal,
  label: "Center",
};
