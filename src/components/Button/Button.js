import styled, { css } from "styled-components";
import { Button } from "antd";
import PropTypes from "prop-types";

const CustomButton = styled(Button)`
  display: block;
  margin: 10px 15px;
  height: auto !important;
  ${(props) =>
    props.danger &&
    css`
      background: #a00d0d !important;
      color: white !important;
    `}
  ${(props) =>
    props.primary &&
    css`
      background: #3939d7 !important;
      color: white !important;
    `}
  ${(props) =>
    props.dashed &&
    css`
      border: 3px dashed black !important;
    `}
`;

const ButtonComponent = ({ label, ...other }) => (
  <CustomButton {...other}>{label}</CustomButton>
);

ButtonComponent.propTypes = {
  label: PropTypes.string.isRequired,
  dashed: PropTypes.bool,
};

export default ButtonComponent;
