import { useState, useCallback } from "react";
import { Modal, Button } from "antd";

const ModalComponent = ({ label, wrapper, ...other }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const CustomModal = wrapper || Modal;

  const showModal = useCallback(() => {
    setIsModalVisible(true);
  }, [isModalVisible]);

  const handleCancel = useCallback(() => {
    setIsModalVisible(false);
  }, [isModalVisible]);

  return (
    <>
      <Button type="primary" onClick={showModal}>
        {label}
      </Button>
      <CustomModal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleCancel}
        onCancel={handleCancel}
        {...other}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </CustomModal>
    </>
  );
};

export default ModalComponent;
