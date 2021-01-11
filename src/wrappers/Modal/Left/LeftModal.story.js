import LeftModal from "./LeftModal";
import Modal from "@components/Modal";

export default {
  title: "Example/Modal",
  component: Modal,
  argTypes: {
    wrapper: { table: { disable: true } },
  },
};

export const Left = (args) => <Modal {...args} />;
Left.args = {
  wrapper: LeftModal,
  label: "Left",
};
