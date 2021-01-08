import { Switch } from "antd";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const CustomSwitch = styled(Switch)`
  margin: 10px;
  ${(props) =>
    props.color &&
    css`
      background: ${props.color};
    `}
  ${(props) =>
    props.size === "medium" &&
    css`
      width: 55px;
    `}
      ${(props) =>
    props.size === "large" &&
    css`
      width: 70px;
    `}
`;

const SwitchComponent = (props) => {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  return <CustomSwitch defaultChecked onChange={onChange} {...props} />;
};

SwitchComponent.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(["default", "medium", "large"]),
};

export default SwitchComponent;
