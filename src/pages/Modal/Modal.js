import Modal from "@components/Modal";

import PositionedModal from "../../wrappers/Modal/Positioned";

const ModalPage = () => {
    return (
        <>
            <div>
                <Modal />
            </div>
            <br/>
            <div>
                <Modal wrapper={PositionedModal} horizontalCenter verticalCenter/>
            </div>
            <br/>
            <div>
                <Modal wrapper={PositionedModal} horizontalCenter top/>
            </div>
            <br/>
            <div>
                <Modal wrapper={PositionedModal} left top/>
            </div>
            <br/>
            <div>
                <Modal wrapper={PositionedModal} horizontalCenter bottom/>
            </div>
        </>
    );
};

export default ModalPage;