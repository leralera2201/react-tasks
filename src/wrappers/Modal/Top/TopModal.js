import styled from "styled-components";
import { Modal } from "antd";

const TopModal = styled(Modal)`
  -webkit-animation-duration: 0s !important;
  animation-duration: 0s !important;
  position: absolute;
  padding-bottom: 0;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
`;

export default TopModal;
