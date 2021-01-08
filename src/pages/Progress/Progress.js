import Progress from "@components/Progress";

const ProgressPage = () => {
  return (
    <>
      <Progress percent={50} />
      <Progress percent={50} color="danger" />
      <Progress percent={50} color="success" />
      <Progress percent={50} color="warning" />
      <Progress percent={50} color="success" size="large" />
      <Progress percent={50} color="danger" size="small" />
    </>
  );
};

export default ProgressPage;
