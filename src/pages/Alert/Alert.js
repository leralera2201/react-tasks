import ColoredAlert from "../../wrappers/Alert/ColoredAlert";

const Alert = () => {
  return (
    <>
      <ColoredAlert type="success" message="Success Alert" showIcon />
      <ColoredAlert type="error" message="Error Alert" showIcon />
      <ColoredAlert type="info" message="Info Alert" />
      <ColoredAlert type="warning" message="Warning Alert" />
    </>
  );
};

export default Alert;
