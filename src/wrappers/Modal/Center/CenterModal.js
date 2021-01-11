import styled from "styled-components";
import { Modal } from "antd";

const CenterModal = styled(Modal)`
  -webkit-animation-duration: 0s !important;
  animation-duration: 0s !important;
  position: absolute;
  padding-bottom: 0;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default CenterModal;
