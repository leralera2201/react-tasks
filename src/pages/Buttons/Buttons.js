import Button from "@components/Button";

const Buttons = () => {
  return (
    <>
      <Button label="Simple" />
      <Button dashed={true} label="Dashed" />
      <Button danger={true} label="Danger" />
      <Button primary={true} dashed={true} label="Primary dashed" />
    </>
  );
};

export default Buttons;
