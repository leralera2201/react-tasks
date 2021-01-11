import BottomModal from "./BottomModal";
import Modal from "@components/Modal";

export default {
  title: "Example/Modal",
  component: Modal,
  argTypes: {
    wrapper: { table: { disable: true } },
  },
};

export const Bottom = (args) => <Modal {...args} />;
Bottom.args = {
  wrapper: BottomModal,
  label: "Bottom",
};
