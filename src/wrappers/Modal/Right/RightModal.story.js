import RightModal from "./RightModal";
import Modal from "@components/Modal";

export default {
  title: "Example/Modal",
  component: Modal,
  argTypes: {
    wrapper: { table: { disable: true } },
  },
};

export const Right = (args) => <Modal {...args} />;
Right.args = {
  wrapper: RightModal,
  label: "Right",
};
