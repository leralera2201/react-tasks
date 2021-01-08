import { Select } from "antd";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const { Option } = Select;

const CustomSelect = styled(Select)`
  ${(props) =>
    props.size === "large" &&
    css`
      .ant-select-selector {
        width: 200px !important;
        font-size: 24px;
      }
    `}
  ${(props) =>
    props.size === "medium" &&
    css`
      .ant-select-selector {
        width: 100px !important;
        font-size: 16px;
      }
    `}
`;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const SelectComponent = (props) => {
  return (
    <>
      <CustomSelect defaultValue="lucy" onChange={handleChange} {...props}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
      </CustomSelect>
    </>
  );
};

SelectComponent.propTypes = {
  size: PropTypes.oneOf(["default", "medium", "large"]),
};

export default SelectComponent;
