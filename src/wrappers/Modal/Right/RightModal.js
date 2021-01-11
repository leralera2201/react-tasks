import styled from "styled-components";
import { Modal } from "antd";

const RightModal = styled(Modal)`
  -webkit-animation-duration: 0s !important;
  animation-duration: 0s !important;
  position: absolute;
  padding-bottom: 0;
  left: 100%;
  top: 50%;
  transform: translate(-100%, -50%);
`;

export default RightModal;
