import styled from "styled-components";
import { Modal } from "antd";

const LeftModal = styled(Modal)`
  -webkit-animation-duration: 0s !important;
  animation-duration: 0s !important;
  position: absolute;
  padding-bottom: 0;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export default LeftModal;
