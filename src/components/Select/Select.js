import { Select } from "antd";

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const SelectItem = ({ wrapper, ...other }) => {
  const Component = wrapper || Select;
  return (
    <>
      <Component defaultValue="lucy" onChange={handleChange} {...other}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
      </Component>
    </>
  );
};

export default SelectItem;
