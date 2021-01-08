import { useState, useCallback } from "react";
import { Modal, Button } from "antd";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const CustomModal = styled(Modal)`
  ${(props) =>
    props.type &&
    props.type !== "default" &&
    css`
      -webkit-animation-duration: 0s !important;
      animation-duration: 0s !important;
      position: absolute;
      padding-bottom: 0;
      left: 50%;
    `}

  ${(props) =>
    props.type === "center" &&
    css`
      top: 50%;
      transform: translate(-50%, -50%);
    `}

  ${(props) =>
    props.type === "bottom" &&
    css`
      top: 100%;
      transform: translate(-50%, -100%);
    `}
  ${(props) =>
    props.type === "top" &&
    css`
      top: 0;
      transform: translateX(-50%);
    `}
  ${(props) =>
    props.type === "right" &&
    css`
      left: 100%;
      top: 50%;
      transform: translate(-100%, -50%);
    `}
  ${(props) =>
    props.type === "left" &&
    css`
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    `}
`;

const ModalComponent = ({ label, ...other }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

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

ModalComponent.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    "default",
    "center",
    "top",
    "bottom",
    "right",
    "left",
  ]),
};

export default ModalComponent;
