import TopModal from "./TopModal";
import Modal from "@components/Modal";

export default {
  title: "Example/Modal",
  component: Modal,
  argTypes: {
    wrapper: { table: { disable: true } },
  },
};

export const Top = (args) => <Modal {...args} />;
Top.args = {
  wrapper: TopModal,
  label: "Top",
};
