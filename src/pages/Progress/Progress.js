import { Progress } from "antd";
import ColoredProgress from "../../wrappers/Progress/Colored";
import ProgressSize from "../../wrappers/Progress/ProgressSize";

const ProgressPage = () => {
  return (
    <>
      <Progress percent={50} />
      <ColoredProgress percent={50} danger />
      <ColoredProgress percent={50} sucess />
      <ColoredProgress percent={50} warning />
      <ProgressSize percent={50} sucess large />
      <ProgressSize percent={50} danger small />
    </>
  );
};

export default ProgressPage;
