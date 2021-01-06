import { useState, useCallback, useMemo } from "react";
import { Modal, Button } from "antd";

const ModalItem = ({ wrapper, ...other }) => {
  const Component = wrapper || Modal;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = useCallback(() => {
    setIsModalVisible(true);
  }, [isModalVisible]);

  const handleCancel = useCallback(() => {
    setIsModalVisible(false);
  }, [isModalVisible]);

  const buttonText = useMemo(() => {
    return Object.keys(other).join(" ") || "Modal";
  }, [other]);

  return (
    <>
      <Button type="primary" onClick={showModal}>
        {buttonText}
      </Button>
      <Component
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleCancel}
        onCancel={handleCancel}
        {...other}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Component>
    </>
  );
};

export default ModalItem;
