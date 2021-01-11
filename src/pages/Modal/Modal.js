import Modal from "@components/Modal";

import CenteredModal from "../../wrappers/Modal/Center";

const ModalPage = () => {
  return (
    <>
      <div>
        <Modal label="Default" />
      </div>
      <br />
      <div>
        <Modal label="Center" wrapper={CenteredModal} />
      </div>
      <br />
      <div>
        <Modal label="Center" wrapper={CenteredModal} />
      </div>
      <br />
      <div>
        <Modal label="Center" wrapper={CenteredModal} />
      </div>
      <br />
      <div>
        <Modal label="Center" wrapper={CenteredModal} />
      </div>
      <br />
      <div>
        <Modal label="Center" wrapper={CenteredModal} />
      </div>
    </>
  );
};

export default ModalPage;
