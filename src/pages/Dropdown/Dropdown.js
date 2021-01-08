import Dropdown from "@components/Dropdown";

const DropdownPage = () => {
  return (
    <>
      <Dropdown />
      <Dropdown color="red" />
      <Dropdown bordered={true} color="black" />
    </>
  );
};

export default DropdownPage;
