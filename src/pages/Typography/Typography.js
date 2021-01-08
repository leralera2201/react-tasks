import Typography from "@components/Typography";

const TypographyPage = () => {
  return (
    <>
      <Typography label="I am default typography" />
      <Typography
        warning={true}
        size="small"
        label="I am small warning typography"
      />
      <Typography danger={true} label="I am danger typography" />
      <Typography
        success={true}
        size="large"
        label="I am large success typography"
      />
    </>
  );
};

export default TypographyPage;
