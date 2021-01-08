import { Button, notification, Alert } from "antd";

const openNotification = () => {
  notification.open({
    message: "Notification Title",
    description: <Alert type="success" message="Some message" />,
    duration: 0,
  });
};

const Notification = () => {
  return (
    <>
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    </>
  );
};

export default Notification;
