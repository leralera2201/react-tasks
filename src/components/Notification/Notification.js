import { Button, notification } from 'antd';

import ColoredAlert from "../../wrappers/Alert/ColoredAlert";


const openNotification = () => {
    notification.open({
        message: 'Notification Title',
        description: <ColoredAlert type="success" message="Some message" />,
        duration: 0,
    });
};

const Notification = () => {
    return <>
        <Button type="primary" onClick={openNotification}>
            Open the notification box
        </Button>
    </>
}

export default Notification