import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const ModalItem = ({wrapper, ...other}) => {
    const Component = wrapper || Modal;
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const buttonText = Object.keys(other).join(' ') || 'Modal'

    return (
        <>
            <Button type="primary" onClick={showModal}>
                {buttonText}
            </Button>
            <Component title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} {...other}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Component>
        </>
    );
};

export default ModalItem;