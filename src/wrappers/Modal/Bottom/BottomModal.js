import styled from "styled-components";
import { Modal } from "antd";

const BottomModal = styled(Modal)`
  -webkit-animation-duration: 0s !important;
  animation-duration: 0s !important;
  position: absolute;
  padding-bottom: 0;
  left: 50%;
  top: 100%;
  transform: translate(-50%, -100%);
`;

export default BottomModal;
