import { Switch } from "antd";

const SwitchItem = ({ wrapper, color }) => {
  const ComponentWrapper = wrapper || Switch;

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  return <ComponentWrapper defaultChecked onChange={onChange} color={color} />;
};

export default SwitchItem;
