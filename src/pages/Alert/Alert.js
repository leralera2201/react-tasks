import Alert from "@components/Alert";

const AlertPage = () => {
  return (
    <>
      <Alert type="success" message="Success Alert" showIcon />
      <Alert type="error" message="Error Alert" showIcon />
      <Alert type="info" message="Info Alert" />
      <Alert type="warning" message="Warning Alert" />
    </>
  );
};

export default AlertPage;
