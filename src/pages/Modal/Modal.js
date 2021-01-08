import Modal from "@components/Modal";

const ModalPage = () => {
  return (
    <>
      <div>
        <Modal label="Default" />
      </div>
      <br />
      <div>
        <Modal type="center" label="Center" />
      </div>
      <br />
      <div>
        <Modal type="top" label="Top" />
      </div>
      <br />
      <div>
        <Modal type="bottom" label="Bottom" />
      </div>
      <br />
      <div>
        <Modal type="left" label="Left" />
      </div>
      <br />
      <div>
        <Modal type="right" label="Right" />
      </div>
    </>
  );
};

export default ModalPage;
